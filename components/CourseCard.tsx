import React from 'react';
import { CheckCircle2, Laptop2 } from 'lucide-react';
import { CourseData } from '../types';

interface CourseCardProps {
  data: CourseData;
}

const CourseCard: React.FC<CourseCardProps> = ({ data }) => {
  return (
    <div id={data.id} className="scroll-mt-24 py-12">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 transition-all hover:shadow-2xl">
        <div className="bg-primary-900 p-6 md:p-8 text-white relative overflow-hidden">
          {/* Decorative background element */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-10 -translate-y-10 blur-xl"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-3xl font-bold mb-2">{data.title}</h3>
              <span className="inline-block bg-accent-500 text-white text-lg font-bold px-4 py-1 rounded-full shadow-sm">
                {data.code}
              </span>
            </div>
            <Laptop2 className="w-16 h-16 text-white/20 hidden md:block" />
          </div>
        </div>

        <div className="p-6 md:p-8">
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            {data.description}
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Features List */}
            <div>
              <h4 className="text-xl font-bold text-primary-800 mb-4 border-b-2 border-accent-400 inline-block pb-1">
                ماذا نقدم في هذا المقرر؟
              </h4>
              <ul className="space-y-3">
                {data.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-accent-500 mt-1 ml-3 flex-shrink-0" />
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Software Training */}
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <h4 className="text-xl font-bold text-primary-800 mb-4">
                التدريب العملي (Simulation Training)
              </h4>
              <div className="space-y-4">
                {data.software.map((soft, idx) => (
                  <div key={idx} className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm">
                    <span className="font-bold text-slate-800 text-lg">{soft.name}</span>
                    <span className="text-sm font-semibold bg-primary-100 text-primary-800 px-3 py-1 rounded-full">
                      {soft.levels}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;