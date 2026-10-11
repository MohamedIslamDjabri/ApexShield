'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Phone } from 'lucide-react';
import { AIChatDrawer } from './AIChatDrawer';

export function FloatingAIButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [initialTab, setInitialTab] = useState<'chat' | 'voice'>('chat');

  const openWithTab = (tab: 'chat' | 'voice') => {
    setInitialTab(tab);
    setIsOpen(true);
  };

  return (
    <>
      {/* Floating Action Button with Smooth Spring Entry */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5, ease: 'easeOut' }}
        className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2"
      >
        {/* Quick Voice Call Mini Pill */}
        <motion.button
          whileHover={{ x: -4, scale: 1.02 }}
          whileTap={{ scale: 0.96 }}
          type="button"
          onClick={() => openWithTab('voice')}
          className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white text-[#0B1F33] text-xs font-bold shadow-lg border border-slate-200 hover:border-[#F97316] transition-all"
          aria-label="Start AI Voice Booking Call"
        >
          <span className="w-2 h-2 rounded-full bg-[#F97316] animate-pulse"></span>
          <Phone className="w-3.5 h-3.5 text-[#F97316]" />
          <span>AI Voice Booking Call</span>
        </motion.button>

        {/* Main Floating Trigger */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="button"
          onClick={() => openWithTab('chat')}
          className="group relative flex items-center gap-2.5 px-4 py-3 sm:px-5 sm:py-3.5 rounded-full bg-[#0B1F33] text-white shadow-2xl border-2 border-white/20 hover:border-[#F97316] transition-all"
          aria-label="Open ApexShield AI Assistant"
        >
          {/* Subtle safety-orange radar ping */}
          <span className="absolute -inset-1 rounded-full bg-[#F97316]/20 animate-ping pointer-events-none"></span>

          <div className="w-8 h-8 rounded-full bg-[#F97316] text-white flex items-center justify-center flex-shrink-0 shadow-md">
            <Sparkles className="w-4 h-4" />
          </div>

          <div className="flex flex-col text-left">
            <div className="flex items-center gap-1.5 leading-none">
              <span className="text-xs sm:text-sm font-bold text-white tracking-wide">
                AI Roof Concierge
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            </div>
            <span className="text-[10px] text-[#AEC9E8] mt-0.5 font-medium">
              Chat &amp; Voice Booking
            </span>
          </div>
        </motion.button>
      </motion.div>

      {/* AI Drawer / Modal */}
      <AIChatDrawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        initialTab={initialTab}
      />
    </>
  );
}
