
import React from 'react';
import { Download, Building2, GraduationCap, Award, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import ProfileSection from '@/components/resume/ProfileSection';
import ExperienceItem from '@/components/resume/ExperienceItem';
import SkillsGroup from '@/components/resume/SkillsGroup';
import EducationItem from '@/components/resume/EducationItem';

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
          <ProfileSection />

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
              <motion.div 
                className="bg-white/5 rounded-xl p-6"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
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
              </motion.div>
              <motion.div 
                className="bg-white/5 rounded-xl p-6"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Award className="w-6 h-6" />
                  Certifications & Recognition
                </h3>
                <div className="space-y-4">
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
              </motion.div>
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

export default Index;
