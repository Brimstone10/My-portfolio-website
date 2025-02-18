
interface SkillsGroupProps {
  title: string;
  skills: string[];
}

const SkillsGroup = ({ title, skills }: SkillsGroupProps) => (
  <div>
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <div className="space-y-2">
      {skills.map((skill, index) => (
        <div key={index} className="bg-white/5 rounded-xl px-4 py-3 text-purple-200">
          {skill}
        </div>
      ))}
    </div>
  </div>
);

export default SkillsGroup;
