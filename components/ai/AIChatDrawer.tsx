'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  MessageSquare,
  Phone,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  X,
  Send,
  Loader2,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import { SITE_CONFIG } from '@/constants/data';

interface Message {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
  booking?: {
    confirmed?: boolean;
    service?: string;
    name?: string;
    phone?: string;
    address?: string;
    preferredTime?: string;
  } | null;
}

interface AIChatDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'chat' | 'voice';
}

export function AIChatDrawer({ isOpen, onClose, initialTab = 'chat' }: AIChatDrawerProps) {
  const [activeTab, setActiveTab] = useState<'chat' | 'voice'>(initialTab);
  const msgCounterRef = useRef(1);

  // Chat State
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'ai',
      text: `Hello! I'm your ApexShield AI Roofing Concierge. I can provide estimated pricing, answer storm hail damage questions, or book your complimentary 21-point 4K drone roof inspection across Central Texas. How can I help you today?`,
      timestamp: 'Just now',
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Voice Call State
  const [callActive, setCallActive] = useState(false);
  const [callDuration, setCallDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [speakerEnabled, setSpeakerEnabled] = useState(true);
  const [isListening, setIsListening] = useState(false);
  const [voiceTranscript, setVoiceTranscript] = useState<string>('');
  const [agentSpeaking, setAgentSpeaking] = useState(false);
  const [callConfirmedBooking, setCallConfirmedBooking] = useState<{
    service?: string;
    address?: string;
    phone?: string;
    preferredTime?: string;
  } | null>(null);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const recognitionRef = useRef<unknown>(null);

  // Quick Starter Prompts
  const quickPrompts = [
    'How much is a roof replacement?',
    'Book a free 4K drone inspection',
    'Does insurance cover hail damage?',
    'Class 4 impact shingles discount',
  ];

  useEffect(() => {
    if (activeTab === 'chat') {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping, activeTab]);

  // Call Duration Timer
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (callActive) {
      timer = setInterval(() => {
        setCallDuration((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [callActive]);

  // Format Duration seconds into MM:SS
  const formatDuration = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainingSecs = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${remainingSecs.toString().padStart(2, '0')}`;
  };

  // Send Chat Message
  const handleSendMessage = async (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim() || isTyping) return;

    msgCounterRef.current += 1;
    const userMsgId = `user-${msgCounterRef.current}`;

    const userMessage: Message = {
      id: userMsgId,
      sender: 'user',
      text: query,
      timestamp: 'Just now',
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    try {
      const res = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: query,
          history: messages,
        }),
      });

      const data = await res.json();

      msgCounterRef.current += 1;
      const aiMsgId = `ai-${msgCounterRef.current}`;

      const aiMessage: Message = {
        id: aiMsgId,
        sender: 'ai',
        text: data.reply || "I'd be glad to help schedule your free 21-point drone inspection or answer any roofing questions.",
        timestamp: 'Just now',
        booking: data.booking,
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (err) {
      console.error('Chat error:', err);
      msgCounterRef.current += 1;
      setMessages((prev) => [
        ...prev,
        {
          id: `err-${msgCounterRef.current}`,
          sender: 'ai',
          text: `I'm having trouble connecting right now, but you can always reach our Central Texas dispatch directly at ${SITE_CONFIG.phone} for immediate assistance!`,
          timestamp: 'Just now',
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  // Play audio response from TTS or Web Speech fallback
  const speakText = async (text: string) => {
    if (!speakerEnabled) return;
    setAgentSpeaking(true);

    try {
      const res = await fetch('/api/ai/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
      });

      const data = await res.json();

      if (data.audio) {
        if (!audioRef.current) {
          audioRef.current = new Audio();
        }
        audioRef.current.src = `data:audio/wav;base64,${data.audio}`;
        audioRef.current.onended = () => {
          setAgentSpeaking(false);
        };
        await audioRef.current.play();
        return;
      }
    } catch (e) {
      console.warn('Server TTS unavailable, using browser speech synthesis fallback', e);
    }

    // Fallback: Browser Web Speech API
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1.0;
      utterance.pitch = 1.0;
      utterance.onend = () => setAgentSpeaking(false);
      utterance.onerror = () => setAgentSpeaking(false);
      window.speechSynthesis.speak(utterance);
    } else {
      setAgentSpeaking(false);
    }
  };

  // Start Voice Call
  const startVoiceCall = () => {
    setCallDuration(0);
    setCallActive(true);
    setCallConfirmedBooking(null);
    setVoiceTranscript("Connected to ApexShield Dispatcher. Greeting customer...");

    const initialGreeting = "Hello! Thanks for calling ApexShield Roofing. I'm your AI booking specialist. Are you looking to schedule a free 4K drone roof inspection, or do you have an active storm leak?";
    speakText(initialGreeting);
    initSpeechRecognition();
  };

  // End Voice Call
  const endVoiceCall = () => {
    setCallActive(false);
    setCallDuration(0);
    setAgentSpeaking(false);
    setIsListening(false);
    if (audioRef.current) {
      audioRef.current.pause();
    }
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    const rec = recognitionRef.current as { stop?: () => void } | null;
    if (rec?.stop) {
      rec.stop();
    }
  };

  // Initialize Speech Recognition
  const initSpeechRecognition = () => {
    if (typeof window === 'undefined') return;

    interface SpeechRecognitionConstructor {
      new (): {
        continuous: boolean;
        interimResults: boolean;
        lang: string;
        start: () => void;
        stop: () => void;
        onstart: () => void;
        onresult: (e: { results: Array<Array<{ transcript: string }>> }) => void;
        onerror: (e: unknown) => void;
        onend: () => void;
      };
    }

    interface WindowWithSpeech extends Window {
      SpeechRecognition?: SpeechRecognitionConstructor;
      webkitSpeechRecognition?: SpeechRecognitionConstructor;
    }

    const win = window as unknown as WindowWithSpeech;
    const SpeechRecognition = win.SpeechRecognition || win.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setVoiceTranscript("Voice input not supported in this browser. You can type in the chat tab!");
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = false;
      recognition.lang = 'en-US';

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onresult = async (event: { results: Array<Array<{ transcript: string }>> }) => {
        const currentResult = event.results[event.results.length - 1];
        const spokenText = currentResult[0].transcript;
        if (!spokenText.trim() || isMuted) return;

        setVoiceTranscript(`You: "${spokenText}"`);

        try {
          const res = await fetch('/api/ai/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              message: spokenText,
              history: [
                { sender: 'ai', text: 'You are speaking on an active voice call with the homeowner. Keep responses short and conversational, suitable for spoken voice. Ask for their address, phone number, and preferred date to book their free drone inspection.' }
              ],
            }),
          });
          const data = await res.json();
          const cleanReply = data.reply || "Understood. Let me note that down for your inspection booking.";
          setVoiceTranscript(`Dispatcher: "${cleanReply}"`);
          speakText(cleanReply);

          if (data.booking) {
            setCallConfirmedBooking(data.booking);
          }
        } catch (e) {
          console.error(e);
        }
      };

      recognition.onerror = () => {
        setIsListening(false);
      };

      recognition.onend = () => {
        if (callActive && !isMuted) {
          try {
            recognition.start();
          } catch {
            // ignore
          }
        }
      };

      recognitionRef.current = recognition;
      recognition.start();
    } catch (e) {
      console.error('Speech recognition init error:', e);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm flex justify-end animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white h-full shadow-2xl flex flex-col justify-between border-l border-slate-200 text-slate-800">
        {/* Header */}
        <div className="bg-[#0B1F33] text-white p-4 sm:p-5 flex items-center justify-between border-b border-white/10 flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#F97316] text-white flex items-center justify-center shadow-md">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-headline-sm text-base font-bold text-white leading-tight">
                  ApexShield AI Assistant
                </h3>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              </div>
              <p className="text-[11px] text-[#AEC9E8] mt-0.5">
                Central Texas 24/7 Roofing &amp; Drone Booking Dispatch
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Close Assistant"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selector */}
        <div className="flex border-b border-slate-200 bg-slate-50 flex-shrink-0">
          <button
            type="button"
            onClick={() => setActiveTab('chat')}
            className={`flex-1 py-3 px-4 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 border-b-2 transition-all ${
              activeTab === 'chat'
                ? 'border-[#F97316] text-[#0B1F33] bg-white'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <MessageSquare className="w-4 h-4 text-[#F97316]" />
            <span>AI Roof Chat</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('voice')}
            className={`flex-1 py-3 px-4 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 border-b-2 transition-all ${
              activeTab === 'voice'
                ? 'border-[#F97316] text-[#0B1F33] bg-white'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Phone className="w-4 h-4 text-[#F97316]" />
            <span>AI Voice Call</span>
            <span className="px-1.5 py-0.5 rounded bg-orange-100 text-[#F97316] text-[10px] font-extrabold">
              LIVE
            </span>
          </button>
        </div>

        {/* TAB 1: AI CHAT */}
        {activeTab === 'chat' && (
          <div className="flex flex-col flex-grow overflow-hidden">
            {/* Messages Area */}
            <div className="flex-grow overflow-y-auto p-4 sm:p-5 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${
                    msg.sender === 'user' ? 'items-end' : 'items-start'
                  }`}
                >
                  <div className="flex items-end gap-2 max-w-[85%] sm:max-w-[80%]">
                    {msg.sender === 'ai' && (
                      <div className="w-7 h-7 rounded-full bg-[#0B1F33] text-[#F97316] flex items-center justify-center flex-shrink-0 mb-1">
                        <Sparkles className="w-3.5 h-3.5" />
                      </div>
                    )}

                    <div
                      className={`p-3.5 sm:p-4 rounded-2xl text-xs sm:text-sm leading-relaxed shadow-sm ${
                        msg.sender === 'user'
                          ? 'bg-[#0B1F33] text-white rounded-br-none'
                          : 'bg-[#EFF4FF] text-slate-800 border border-blue-100 rounded-bl-none'
                      }`}
                    >
                      <p className="whitespace-pre-line">{msg.text}</p>

                      {/* Structured Booking Card if present */}
                      {msg.booking && msg.booking.confirmed && (
                        <div className="mt-3 p-3.5 rounded-xl bg-white text-slate-900 border border-emerald-300 shadow-md">
                          <div className="flex items-center gap-1.5 text-emerald-700 font-bold text-xs mb-1">
                            <CheckCircle2 className="w-4 h-4" />
                            <span>Drone Inspection Appointment Logged!</span>
                          </div>
                          <p className="text-[11px] text-slate-600 mb-2">
                            Our Austin dispatch coordinator is holding your inspection window.
                          </p>
                          <div className="space-y-1 text-xs text-slate-700 border-t border-slate-100 pt-2 font-medium">
                            {msg.booking.address && (
                              <p>
                                📍 <strong>Address:</strong> {msg.booking.address}
                              </p>
                            )}
                            {msg.booking.service && (
                              <p>
                                🔨 <strong>Service:</strong> {msg.booking.service}
                              </p>
                            )}
                            {msg.booking.phone && (
                              <p>
                                📞 <strong>Phone:</strong> {msg.booking.phone}
                              </p>
                            )}
                            {msg.booking.preferredTime && (
                              <p>
                                ⏰ <strong>Time:</strong> {msg.booking.preferredTime}
                              </p>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-2 text-slate-500 text-xs pl-2">
                  <div className="w-6 h-6 rounded-full bg-[#0B1F33] text-[#F97316] flex items-center justify-center">
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  </div>
                  <span>ApexShield Concierge is typing...</span>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Starters */}
            <div className="px-4 py-2 border-t border-slate-100 bg-slate-50 flex items-center gap-2 overflow-x-auto">
              {quickPrompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => handleSendMessage(prompt)}
                  className="px-2.5 py-1.5 rounded-full bg-white hover:bg-orange-50 border border-slate-200 text-slate-700 text-xs whitespace-nowrap font-medium transition-colors"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Chat Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="p-3 sm:p-4 bg-white border-t border-slate-200 flex items-center gap-2 flex-shrink-0"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about shingles, hail damage, or book drone scan..."
                disabled={isTyping}
                className="flex-grow h-11 px-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#F97316]"
              />
              <button
                type="submit"
                disabled={isTyping || !input.trim()}
                className="h-11 px-4 rounded-xl bg-[#F97316] hover:bg-[#EA580C] text-white flex items-center justify-center transition-all disabled:opacity-50"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}

        {/* TAB 2: AI VOICE CALL */}
        {activeTab === 'voice' && (
          <div className="flex flex-col flex-grow justify-between p-6 sm:p-8 bg-gradient-to-b from-[#0B1F33] to-[#00050E] text-white overflow-y-auto">
            {/* Call Header / Caller ID */}
            <div className="text-center flex flex-col items-center">
              <div className="relative mb-4">
                <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#0B1F33] to-[#F97316] flex items-center justify-center shadow-2xl border-2 border-white/20">
                  <Phone className="w-10 h-10 text-white animate-bounce" />
                </div>
                {callActive && (
                  <span className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-[#0B1F33]"></span>
                )}
              </div>

              <h4 className="font-headline-sm text-xl sm:text-2xl font-bold text-white">
                ApexShield AI Booking Call
              </h4>
              <p className="text-xs text-[#AEC9E8] mt-1">
                Automated Residential Roofing Dispatcher
              </p>

              {callActive ? (
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold mt-3 border border-emerald-500/30">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  <span>Call In Progress • {formatDuration(callDuration)}</span>
                </div>
              ) : (
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#CFE5FF] text-xs font-semibold mt-3">
                  <span>Press button below to speak directly with AI</span>
                </div>
              )}
            </div>

            {/* Audio Waveform / Visualizer */}
            <div className="my-6 p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center min-h-[160px]">
              {callActive ? (
                <div className="flex flex-col items-center gap-4 w-full">
                  {/* Animated Waveform Bars */}
                  <div className="flex items-center gap-1.5 h-12">
                    {[16, 28, 42, 24, 38, 48, 30, 20, 44, 32, 18, 40].map((height, i) => (
                      <span
                        key={i}
                        className={`w-1.5 rounded-full bg-[#F97316] transition-all duration-150 ${
                          agentSpeaking || isListening ? 'animate-pulse' : 'opacity-40'
                        }`}
                        style={{
                          height: agentSpeaking ? `${height}px` : isListening ? `${height * 0.6}px` : '10px',
                          animationDelay: `${i * 80}ms`,
                        }}
                      ></span>
                    ))}
                  </div>

                  <p className="text-xs text-center text-[#CFE5FF] font-medium max-w-sm">
                    {agentSpeaking
                      ? '🔊 AI Dispatcher is speaking...'
                      : isListening
                      ? '🎤 Listening to your voice (speak property address or service)...'
                      : 'Audio connected'}
                  </p>

                  {voiceTranscript && (
                    <div className="w-full p-3 rounded-lg bg-black/40 text-xs text-slate-300 italic text-center max-h-24 overflow-y-auto">
                      {voiceTranscript}
                    </div>
                  )}

                  {callConfirmedBooking && (
                    <div className="w-full p-3.5 rounded-xl bg-emerald-950/80 border border-emerald-500/50 text-left text-xs text-emerald-200">
                      <div className="flex items-center gap-1.5 font-bold mb-1">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span>Inspection Confirmed via Voice Call</span>
                      </div>
                      <p>Address: {callConfirmedBooking.address || 'Central Texas Property'}</p>
                      <p>Service: {callConfirmedBooking.service || 'Free 4K Drone Inspection'}</p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center text-xs text-[#AEC9E8] max-w-xs space-y-2">
                  <p className="font-semibold text-white">How the AI Voice Call works:</p>
                  <p>1. You speak normally about your roofing needs, address, or leaks.</p>
                  <p>2. The AI answers your questions with spoken voice and books your appointment directly.</p>
                </div>
              )}
            </div>

            {/* Call Controls */}
            <div className="flex flex-col items-center gap-4">
              {callActive ? (
                <div className="flex items-center gap-4">
                  {/* Mute toggle */}
                  <button
                    type="button"
                    onClick={() => setIsMuted(!isMuted)}
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                      isMuted
                        ? 'bg-red-500/20 text-red-400 border border-red-500/50'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                    aria-label={isMuted ? 'Unmute' : 'Mute'}
                  >
                    {isMuted ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                  </button>

                  {/* End Call Button */}
                  <button
                    type="button"
                    onClick={endVoiceCall}
                    className="px-8 py-3.5 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold text-sm shadow-xl flex items-center gap-2 active:scale-95 transition-all"
                  >
                    <Phone className="w-5 h-5 rotate-[135deg]" />
                    <span>End Call</span>
                  </button>

                  {/* Speaker toggle */}
                  <button
                    type="button"
                    onClick={() => setSpeakerEnabled(!speakerEnabled)}
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                      !speakerEnabled
                        ? 'bg-red-500/20 text-red-400 border border-red-500/50'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                    aria-label={speakerEnabled ? 'Mute speaker' : 'Unmute speaker'}
                  >
                    {speakerEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={startVoiceCall}
                  className="w-full py-4 rounded-xl bg-[#F97316] hover:bg-[#EA580C] text-white font-bold text-base shadow-2xl flex items-center justify-center gap-3 active:scale-[0.99] transition-all"
                >
                  <Phone className="w-5 h-5" />
                  <span>Start AI Voice Booking Call</span>
                </button>
              )}

              <p className="text-[11px] text-[#AEC9E8] text-center">
                Need an immediate human specialist? Call{' '}
                <a href={SITE_CONFIG.phoneRaw} className="text-[#F97316] font-bold underline">
                  {SITE_CONFIG.phone}
                </a>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
