
interface EducationItemProps {
  degree: string;
  institution: string;
  date?: string;
  status?: string;
}

const EducationItem = ({ degree, institution, date, status }: EducationItemProps) => (
  <div className="border-l-2 border-purple-500 pl-4">
    <h4 className="font-semibold text-lg">{degree}</h4>
    <p className="text-purple-200">{institution}</p>
    <p className="text-purple-300 text-sm">{status || date}</p>
  </div>
);

export default EducationItem;
