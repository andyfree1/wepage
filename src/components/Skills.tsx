import React from 'react';
import { Brain, Code, Video, TrendingUp } from 'lucide-react';

const skills = [
  {
    name: 'AI Integration',
    percentage: 95,
    icon: Brain,
    color: '#4A90E2'
  },
  {
    name: 'Sales Leadership',
    percentage: 90,
    icon: TrendingUp,
    color: '#50E3C2'
  },
  {
    name: 'Video Production',
    percentage: 85,
    icon: Video,
    color: '#F5A623'
  },
  {
    name: 'Technical Expertise',
    percentage: 88,
    icon: Code,
    color: '#E23E57'
  }
];

export default function Skills() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-[#1E3D59]">Core Competencies</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: skill.color }}
                >
                  <skill.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className="mt-8 text-center">
                <h3 className="font-semibold mb-2">{skill.name}</h3>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="h-2.5 rounded-full transition-all duration-1000"
                    style={{
                      width: `${skill.percentage}%`,
                      backgroundColor: skill.color
                    }}
                  />
                </div>
                <span className="text-sm text-gray-600 mt-2">{skill.percentage}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}