import React from 'react';
import { Calendar, Award, Briefcase, Lightbulb } from 'lucide-react';

const milestones = [
  {
    year: '2021',
    title: 'Hilton Grand Vacations',
    description: 'Pioneered AI-driven sales optimization systems',
    icon: Lightbulb
  },
  {
    year: '2014',
    title: 'Wyndham Worldwide',
    description: 'President\'s Club & Elite Club Achievement',
    icon: Award
  },
  {
    year: '2010',
    title: 'Lightspeed VT',
    description: 'Led production for virtual training systems',
    icon: Briefcase
  },
  {
    year: '1997',
    title: 'Press Play Films',
    description: 'Founded video production company',
    icon: Calendar
  }
];

export default function Timeline() {
  return (
    <section className="py-20 bg-[#1E3D59] text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Career Milestones</h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[#E5E5E5]/30" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className="w-1/2 pr-8 text-right">
                  {index % 2 === 0 && (
                    <div className="space-y-2">
                      <div className="text-2xl font-bold">{milestone.year}</div>
                      <div className="text-xl">{milestone.title}</div>
                      <div className="text-[#E5E5E5]">{milestone.description}</div>
                    </div>
                  )}
                </div>

                <div className="relative flex items-center justify-center w-8">
                  <div className="w-8 h-8 bg-[#E5E5E5] rounded-full flex items-center justify-center">
                    <milestone.icon className="w-4 h-4 text-[#1E3D59]" />
                  </div>
                </div>

                <div className="w-1/2 pl-8">
                  {index % 2 !== 0 && (
                    <div className="space-y-2">
                      <div className="text-2xl font-bold">{milestone.year}</div>
                      <div className="text-xl">{milestone.title}</div>
                      <div className="text-[#E5E5E5]">{milestone.description}</div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}