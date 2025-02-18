import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ExperienceItemProps {
  title: string;
  company: string;
  date: string;
  responsibilities: ReactNode[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ title, company, date, responsibilities }) => {
  return (
    <div className="bg-white/5 rounded-xl p-6">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-purple-200 mb-2">{company}</p>
      <p className="text-purple-200 mb-4">{date}</p>
      <ul className="list-none space-y-2">
        {responsibilities.map((responsibility, index) => (
          <li key={index} className="flex items-start">
            {responsibility}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceItem;
