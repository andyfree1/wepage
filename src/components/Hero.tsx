import React from 'react';
import { Bot, Code } from 'lucide-react';
import AnimatedFrame from './AnimatedFrame';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-[#1E3D59] overflow-hidden flex items-center">
      {/* Animated background particles */}
      <div className="absolute inset-0 hero-particles opacity-20" />
      
      <div className="container mx-auto px-6 py-24 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left text-white">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Andrew Freeman
          </h1>
          <p className="text-xl lg:text-2xl mb-8 text-[#E5E5E5]">
            Pioneering the intersection of Sales, Technology, and Entertainment through AI Innovation
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <a
              href="#portfolio"
              className="px-8 py-3 bg-white text-[#1E3D59] rounded-full font-semibold hover:bg-[#E5E5E5] transition-colors flex items-center gap-2"
            >
              <Code className="w-5 h-5" />
              View Portfolio
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-[#1E3D59] transition-colors flex items-center gap-2"
            >
              <Bot className="w-5 h-5" />
              Chat with AI Assistant
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center lg:justify-end">
          <AnimatedFrame
            src="/images/andrew-freeman.jpg"
            alt="Andrew Freeman professional headshot"
            className="w-full max-w-[400px] h-auto"
          />
        </div>
      </div>
    </div>
  );
}