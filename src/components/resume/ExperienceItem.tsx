
import { motion } from 'framer-motion';

interface ExperienceItemProps {
  title: string;
  company: string;
  date: string;
  responsibilities: string[];
}

const ExperienceItem = ({ title, company, date, responsibilities }: ExperienceItemProps) => (
  <div className="flex gap-4">
    <div className="w-3 h-3 rounded-full bg-purple-500 mt-2" />
    <div className="flex-1 bg-white/5 rounded-xl p-6">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-purple-200 mb-2">{company}</p>
      <p className="text-sm text-purple-300 mb-4">{date}</p>
      <ul className="list-disc list-inside text-purple-200 space-y-2">
        {responsibilities.map((item, index) => (
          <li key={index} className="text-sm">{item}</li>
        ))}
      </ul>
    </div>
  </div>
);

export default ExperienceItem;
