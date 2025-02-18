
import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Download, Building2, GraduationCap, Award } from 'lucide-react';

const Index = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Abhishek-Karki-Resume.pdf';
    link.setAttribute('download', 'Abhishek-Karki-Resume.pdf');
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-[#0B0B1E] text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Profile Card */}
          <div className="relative bg-gradient-to-br from-purple-900 to-blue-900 rounded-3xl p-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-40 h-40 rounded-3xl overflow-hidden mb-6 bg-gradient-to-r from-purple-500 to-blue-500 p-1">
                <img
                  src="/profile-pic.jpeg"
                  alt="Abhishek Karki"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <h1 className="text-4xl font-bold mb-2">Abhishek Karki</h1>
              <h2 className="text-xl text-purple-200 mb-6">Quality Assurance Engineer</h2>
              
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                <ContactItem icon={Mail} text="brtabhishek10@gmail.com" href="mailto:brtabhishek10@gmail.com" />
                <ContactItem icon={Phone} text="+977 9814363802" href="tel:+9779814363802" />
                <ContactItem icon={MapPin} text="Lazimpat, Kathmandu" />
                <ContactItem 
                  icon={Linkedin} 
                  text="LinkedIn" 
                  href="https://www.linkedin.com/in/abhishek-karki-882076219/"
                  external={true}
                />
              </div>
              
              <p className="text-purple-200">
                Offering comprehensive knowledge of testing methodologies and software development cycle. 
                Excellent analytical abilities combined with keen attention to detail.
              </p>
            </div>
          </div>

          {/* Experience Section */}
          <section className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Building2 className="w-8 h-8" />
              Professional Experience
            </h2>
            <div className="space-y-6">
              <ExperienceItem
                title="Software Engineer I"
                company="Infinite Computer Solutions (formerly Cotiviti Nepal)"
                date="September 2023 - Present"
                responsibilities={[
                  "Conducted comprehensive API testing using Postman for DxCG healthcare analytics application",
                  "Performed manual testing and result validation using Beyond Compare",
                  "Implemented detailed regression testing plans across different environments and databases",
                  "Conducted performance testing for system scalability evaluation",
                  "Key role in testing containerized DxCG 6.3 version",
                  "Collaborated in SAFe environment and delivered product demos to stakeholders"
                ]}
              />
              <ExperienceItem
                title="Senior Associate QA Engineer"
                company="TechnoFex Nepal Pvt Ltd"
                date="April 2022 - August 2023"
                responsibilities={[
                  "Implemented UI automation testing using Selenium C# with XUnit and POM framework",
                  "Performed API testing using Postman and Swagger",
                  "Conducted cross-browser testing using BrowserStack",
                  "Managed bug tracking on Azure DevOps",
                  "Provided training and knowledge sharing sessions to interns"
                ]}
              />
              <ExperienceItem
                title="QA Trainee"
                company="Citytech"
                date="November 2021 - April 2022"
                responsibilities={[
                  "Handled FinPRO and TradePulse projects for major banks",
                  "Served as Scrum Master, managing sprint planning and ceremonies",
                  "Created and maintained test cases and project documentation",
                  "Performed testing across QAT, QA, and staging environments"
                ]}
              />
            </div>
          </section>

          {/* Skills Section */}
          <section className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-3xl p-8">
            <div className="inline-block bg-purple-500/20 rounded-full px-4 py-1 text-sm mb-6">
              SKILLS & EXPERTISE
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <SkillsGroup
                title="Technical Skills"
                skills={[
                  "Software testing methodologies",
                  "Test automation (Selenium WebDriver, XUnit)",
                  "API Testing (Postman, Swagger)",
                  "Performance testing (JMeter)",
                  "Database testing (SQL, PostgreSQL)",
                  "Agile/SAFe methodologies",
                  "Test case creation and execution",
                  "Defect tracking and reporting"
                ]}
              />
              <SkillsGroup
                title="Tools & Platforms"
                skills={[
                  "Azure DevOps",
                  "Jira & Confluence",
                  "TestLink",
                  "Selenium",
                  "Postman",
                  "Figma & Adobe XD",
                  "Microsoft Office Suite",
                  "BrowserStack"
                ]}
              />
            </div>
          </section>

          {/* Education Section */}
          <section className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <GraduationCap className="w-8 h-8" />
              Education & Certifications
            </h2>
            <div className="space-y-6">
              <div className="bg-white/5 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Education</h3>
                <div className="space-y-4">
                  <EducationItem
                    degree="International Masters in Business Administration"
                    institution="University of Wolverhampton (Herald College Kathmandu)"
                    status="Ongoing"
                  />
                  <EducationItem
                    degree="BSc (Hons) Computer Science"
                    institution="University of Wolverhampton (Herald College Kathmandu)"
                    date="2018 - 2022"
                  />
                </div>
              </div>
              <div className="bg-white/5 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Award className="w-6 h-6" />
                  Certifications
                </h3>
                <p className="text-purple-200">ISTQB Advanced Test Automation Engineer Certification</p>
              </div>
            </div>
          </section>

          {/* References Section */}
          <section className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-6">References</h2>
            <div className="bg-white/5 rounded-xl p-6">
              <h3 className="text-xl font-semibold">Prajwal Adhikari</h3>
              <p className="text-purple-200 mb-2">Project Manager and InfoSecOps Lead</p>
              <a 
                href="mailto:adhikari.prajwal678@gmail.com" 
                className="text-purple-200 hover:text-purple-100 transition-colors flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                adhikari.prajwal678@gmail.com
              </a>
            </div>
          </section>

          {/* Download Button */}
          <div className="text-center">
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactItem = ({ 
  icon: Icon, 
  text, 
  href, 
  external 
}: { 
  icon: any; 
  text: string; 
  href?: string; 
  external?: boolean;
}) => {
  const content = (
    <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 hover:bg-white/15 transition-colors">
      <Icon className="w-4 h-4" />
      <span className="text-sm">{text}</span>
    </div>
  );

  if (href) {
    return (
      <a 
        href={href} 
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {content}
      </a>
    );
  }

  return content;
};

const ExperienceItem = ({ 
  title, 
  company, 
  date,
  responsibilities 
}: { 
  title: string; 
  company: string; 
  date: string;
  responsibilities: string[];
}) => (
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

const SkillsGroup = ({ title, skills }: { title: string; skills: string[] }) => (
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

const EducationItem = ({ 
  degree, 
  institution, 
  date,
  status 
}: { 
  degree: string; 
  institution: string; 
  date?: string;
  status?: string;
}) => (
  <div className="border-l-2 border-purple-500 pl-4">
    <h4 className="font-semibold text-lg">{degree}</h4>
    <p className="text-purple-200">{institution}</p>
    <p className="text-purple-300 text-sm">{status || date}</p>
  </div>
);

export default Index;
