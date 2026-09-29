import { NextRequest, NextResponse } from 'next/server';
import { getGeminiClient } from '@/lib/gemini';
import { SITE_CONFIG } from '@/constants/data';

export async function POST(req: NextRequest) {
  try {
    const { message, history } = await req.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message text is required' },
        { status: 400 }
      );
    }

    const ai = getGeminiClient();

    const systemInstruction = `
You are the official AI Roofing Concierge and Dispatch Assistant for ApexShield Roofing in Central Texas.
Your job is to assist homeowners, answer questions about residential roofing, diagnose issues, provide estimated ranges, and BOOK complimentary 21-point 4K drone roof inspections or emergency repairs.

Key Company Facts:
- Company Name: ${SITE_CONFIG.name} (${SITE_CONFIG.legalName})
- Phone: ${SITE_CONFIG.phone}
- Email: ${SITE_CONFIG.email}
- Headquarters: ${SITE_CONFIG.fullAddress}
- Texas License: #${SITE_CONFIG.license}
- Emergency Response: 24/7 Rapid Response, 60-min emergency tarping.
- Inspection: 100% Free 21-point 4K Drone Inspection with full digital PDF report. Zero foot-traffic damage.
- Warranties: 50-Year Non-Prorated GAF Master Elite & Owens Corning Platinum warranties.
- Financing: 0% APR Same-as-Cash for 12 months, or 60-month low monthly payments.
- Service Areas: Austin, Round Rock, Cedar Park, Georgetown, Pflugerville, Lakeway, Leander, Buda, Kyle, Dripping Springs.
- Services Offered:
  1. Roof Replacement (GAF Timberline HDZ, Class 4 Impact Resistant shingles, 24-Ga Standing Seam Metal)
  2. Roof Repair & Leak Detection (infrared thermal imaging, pipe boots, chimney flashings, valleys)
  3. Free 4K Drone Inspection (21 points, hail damage mapping)
  4. Storm & Hail Insurance Claims (Xactimate estimates, adjuster roof walks)
  5. 24/7 Emergency Tarping (fast storm dispatch)
  6. Preventative Maintenance Care

Behavior & Tone:
- Professional, reassuring, knowledgeable, and efficient.
- Keep answers concise, helpful, and focused on booking the free drone inspection or answering specific roofing questions.
- Whenever a user shares their property address, phone number, name, or request to book, confirm the appointment warmly.
- If you have collected at least a phone number or address, or the user confirms booking, append a structured booking object at the very end of your response inside a markdown codeblock with tag [BOOKING_DATA]:
\`\`\`json [BOOKING_DATA]
{
  "confirmed": true,
  "service": "Roof Replacement or Free Drone Inspection or Leak Repair",
  "name": "Customer Name or 'Homeowner'",
  "phone": "Customer Phone or ''",
  "address": "Property Address or ''",
  "preferredTime": "e.g. Tomorrow Morning or Within 15 Mins"
}
\`\`\`
Do not show the raw JSON in the conversation text; keep your conversational response natural and encouraging.
`;

    // Format chat history for Gemini contents
    const contents: Array<{ role: 'user' | 'model'; parts: Array<{ text: string }> }> = [];

    if (Array.isArray(history)) {
      for (const item of history.slice(-8)) {
        if (item.sender === 'user' && item.text) {
          contents.push({ role: 'user', parts: [{ text: item.text }] });
        } else if (item.sender === 'ai' && item.text) {
          contents.push({ role: 'model', parts: [{ text: item.text }] });
        }
      }
    }

    contents.push({ role: 'user', parts: [{ text: message }] });

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    const fullText = response.text || "I'd be glad to help schedule your free 21-point drone inspection or answer any roofing questions. How can I assist you today?";

    // Extract any structured booking data if present
    let cleanReply = fullText;
    let bookingData: {
      confirmed?: boolean;
      service?: string;
      name?: string;
      phone?: string;
      address?: string;
      preferredTime?: string;
    } | null = null;

    const bookingMatch = fullText.match(/```(?:json)?\s*\[BOOKING_DATA\]([\s\S]*?)```/);
    if (bookingMatch) {
      try {
        bookingData = JSON.parse(bookingMatch[1].trim());
        cleanReply = fullText.replace(/```(?:json)?\s*\[BOOKING_DATA\][\s\S]*?```/, '').trim();
      } catch (e) {
        console.error('Failed to parse booking data JSON', e);
      }
    }

    return NextResponse.json({
      reply: cleanReply,
      booking: bookingData,
    });
  } catch (error: unknown) {
    console.error('Gemini chat error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';

    // Graceful helpful fallback
    return NextResponse.json({
      reply:
        "Hello! I'm the ApexShield AI Assistant. I can help answer questions about our 50-year warranty roof replacements, leak repairs, and book your complimentary 21-point 4K drone inspection across Central Texas. What property address or service would you like to discuss?",
      booking: null,
      fallback: true,
      error: process.env.NODE_ENV === 'development' ? errorMessage : undefined,
    });
  }
}
