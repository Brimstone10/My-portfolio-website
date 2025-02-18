import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Download, Building2, GraduationCap, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

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
      <Helmet>
        <title>Abhishek Karki - Quality Assurance Engineer</title>
        <meta name="description" content="Abhishek Karki's professional portfolio showcasing experience in Quality Assurance, skills, and certifications." />
        <meta name="keywords" content="Abhishek Karki, Quality Assurance Engineer, QA, Software Testing, Automation, Selenium, API Testing, Kathmandu" />
        <meta name="author" content="Abhishek Karki" />
        <meta property="og:title" content="Abhishek Karki - Quality Assurance Engineer" />
        <meta property="og:description" content="Abhishek Karki's professional portfolio showcasing experience in Quality Assurance, skills, and certifications." />
        <meta property="og:image" content="/profile-pic.jpeg" />
        <meta property="og:url" content="https://abhishek.karki.netlify.app/" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Profile Card */}
          <motion.div 
            className="relative bg-gradient-to-br from-purple-900 to-blue-900 rounded-3xl p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col items-center text-center">
              <motion.div 
                className="w-40 h-40 rounded-3xl overflow-hidden mb-6 bg-gradient-to-r from-purple-500 to-blue-500 p-1"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/profile-pic.jpeg"
                  alt="Abhishek Karki"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
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
                  With a robust understanding of testing methodologies and the software development lifecycle, 
                  I excel in leveraging AI and emerging technologies to enhance quality assurance processes. 
                  My strong analytical skills and meticulous attention to detail enable me to effectively integrate 
                  innovative solutions, such as AI-driven test automation, to optimize test coverage and accuracy.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.section 
            className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-3xl p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Building2 className="w-8 h-8" />
              Professional Experience
            </h2>
            <div className="space-y-6">
              <ExperienceItem
                title="Quality Assurance Engineer"
                company="Yirifi.ai Pte. Ltd., Singapore"
                date="June 2024 - January 2025"
                responsibilities={[
                  "Test Case Preparation: Creating detailed and comprehensive test cases for various applications",
                  "Test Data Preparation: Generating test data for various testing scenarios",
                  "API Testing: Conducting API tests to verify functionality, security, and performance",
                  "Load Testing: Performing load and stress tests to assess application performance",
                  "UI Testing: Testing web applications for usability and responsiveness",
                  "Automation using Selenium (Java in Headless Mode)",
                  "Requirements Analysis and UAT Report Preparation",
                  "Web Application Testing: Conducting end-to-end testing"
                ]}
              />
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
          </motion.section>

          {/* Skills Section */}
          <motion.section 
            className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-3xl p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Building2 className="w-8 h-8" />
              Skills & Tools
            </h2>
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
                  "Defect tracking and reporting",
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
                  "BrowserStack",
                ]}
              />
            </div>
          </motion.section>

          {/* Education Section */}
          <motion.section 
            className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-3xl p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
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
                  Certifications & Recognition
                </h3>
                <p className="text-purple-200">ISTQB Advanced Test Automation Engineer Certification</p>
                <div>
                  <h4 className="font-semibold mb-2">Featured on United Academy's LinkedIn</h4>
                  <a 
                    href="https://www.linkedin.com/posts/unitedacademynepal_alumniacheivement-unitedacademy-unitedacademynepal-activity-7237365923920150528-LXHv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-200 hover:text-purple-100 transition-colors flex items-center gap-2"
                  >
                    <Linkedin className="w-4 h-4" />
                    View Featured Post
                  </a>
                </div>
              </div>
            </div>
          </motion.section>

          {/* References Section */}
          <motion.section 
            className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-3xl p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
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
          </motion.section>

          {/* Download Button */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </button>
          </motion.div>
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
