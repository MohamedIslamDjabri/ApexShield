import React from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { TrustBar } from '@/components/sections/TrustBar';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { BeforeAfterSection } from '@/components/sections/BeforeAfterSection';
import { ReviewsSection } from '@/components/sections/ReviewsSection';
import { ServiceAreasSection } from '@/components/sections/ServiceAreasSection';
import { FinalCTABanner } from '@/components/sections/FinalCTABanner';
import { FAQSection } from '@/components/sections/FAQSection';

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section with Quick Estimate Booking */}
      <HeroSection />

      {/* 2. Docked Trust & Social Proof Metric Bar */}
      <TrustBar />

      {/* 3. Services Preview Bento Tiles */}
      <ServicesSection />

      {/* 4. Why Choose ApexShield Two-Column Showcase */}
      <WhyChooseUs />

      {/* 5. 4-Step Precision Roof Replacement Protocol */}
      <ProcessSection />

      {/* 6. Proven Transformations & Draggable Before/After */}
      <BeforeAfterSection />

      {/* 7. Verified Customer Reviews & BBB/Google Proof */}
      <ReviewsSection />

      {/* 8. Service Areas Coverage & Live Map */}
      <ServiceAreasSection />

      {/* 9. Frequently Asked Questions */}
      <FAQSection />

      {/* 10. Final High-Converting Estimate Request Banner */}
      <FinalCTABanner />
    </div>
  );
}
