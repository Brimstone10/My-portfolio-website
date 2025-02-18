import React from 'react';
import { Download, Building2, GraduationCap, Award, Linkedin, Mail, Search } from 'lucide-react';
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
        <link rel="icon" href="/profile-pic.jpeg" type="image/jpeg" />
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
                title="Software Engineer I"
                company="Infinite Computer Solutions (formerly Cotiviti Nepal)"
                date="September 2023 - Present"
                responsibilities={[
                  <><Search className="inline w-4 h-4 mr-2" />Conducted comprehensive API testing using Postman for DxCG healthcare analytics application</>,
                  <><Search className="inline w-4 h-4 mr-2" />Performed manual testing and result validation using Beyond Compare</>,
                  <><Search className="inline w-4 h-4 mr-2" />Implemented detailed regression testing plans across different environments and databases</>,
                  <><Search className="inline w-4 h-4 mr-2" />Conducted performance testing for system scalability evaluation</>,
                  <><Search className="inline w-4 h-4 mr-2" />Key role in testing containerized DxCG 6.3 version</>,
                  <><Search className="inline w-4 h-4 mr-2" />Collaborated in SAFe environment and delivered product demos to stakeholders</>
                ]}
              />
               <ExperienceItem
                title="Quality Assurance Engineer"
                company="Yirifi.ai Pte. Ltd."
                date="Freelance"
                responsibilities={[
                  <><Search className="inline w-4 h-4 mr-2" />Test Case Preparation: Creating detailed and comprehensive test cases for various applications</>,
                  <><Search className="inline w-4 h-4 mr-2" />Test Data Preparation: Generating test data for various testing scenarios</>,
                  <><Search className="inline w-4 h-4 mr-2" />API Testing: Conducting API tests to verify functionality, security, and performance</>,
                  <><Search className="inline w-4 h-4 mr-2" />Load Testing: Performing load and stress tests to assess application performance</>,
                  <><Search className="inline w-4 h-4 mr-2" />UI Testing: Testing web applications for usability and responsiveness</>,
                  <><Search className="inline w-4 h-4 mr-2" />Automation using Selenium (Java in Headless Mode)</>,
                  <><Search className="inline w-4 h-4 mr-2" />Requirements Analysis and UAT Report Preparation</>,
                  <><Search className="inline w-4 h-4 mr-2" />Web Application Testing: Conducting end-to-end testing</>
                ]}
              />
              <ExperienceItem
                title="Senior Associate QA Engineer"
                company="TechnoFex Nepal Pvt Ltd"
                date="April 2022 - August 2023"
                responsibilities={[
                  <><Search className="inline w-4 h-4 mr-2" />Implemented UI automation testing using Selenium C# with XUnit and POM framework</>,
                  <><Search className="inline w-4 h-4 mr-2" />Performed API testing using Postman and Swagger</>,
                  <><Search className="inline w-4 h-4 mr-2" />Conducted cross-browser testing using BrowserStack</>,
                  <><Search className="inline w-4 h-4 mr-2" />Managed bug tracking on Azure DevOps</>,
                  <><Search className="inline w-4 h-4 mr-2" />Provided training and knowledge sharing sessions to interns</>
                ]}
              />
              <ExperienceItem
                title="QA Trainee"
                company="Citytech"
                date="November 2021 - April 2022"
                responsibilities={[
                  <><Search className="inline w-4 h-4 mr-2" />Handled FinPRO and TradePulse projects for major banks</>,
                  <><Search className="inline w-4 h-4 mr-2" />Served as Scrum Master, managing sprint planning and ceremonies</>,
                  <><Search className="inline w-4 h-4 mr-2" />Created and maintained test cases and project documentation</>,
                  <><Search className="inline w-4 h-4 mr-2" />Performed testing across QAT, QA, and staging environments</>
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
                  <div>
                    <a 
                      href="https://www.udemy.com/certificate/UC-4f30fbb1-23de-40d8-98f0-01a9882d9832/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-200 hover:text-purple-100 transition-colors underline"
                    >
                      ISTQB Advanced Test Automation Engineer Certification
                    </a>
                  </div>
                  <div>
                    <a 
                      href="https://www.udemy.com/certificate/UC-453bee3d-2139-4a36-89b1-5a3a8d715ab5/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-200 hover:text-purple-100 transition-colors underline"
                    >
                      Mastering Functional Testing with Generative AI
                    </a>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Featured on United Academy's LinkedIn</h4>
                    <a 
                      href="https://www.linkedin.com/posts/unitedacademynepal_alumniacheivement-unitedacademy-unitedacademynepal-activity-7237365923920150528-LXHv"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-200 hover:text-purple-100 transition-colors flex items-center gap-2 underline"
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
                className="text-purple-200 hover:text-purple-100 transition-colors flex items-center gap-2 underline"
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

      {/* Footer */}
      <footer className="text-center py-4">
        <p className="text-purple-200">&copy; {new Date().getFullYear()} Abhishek Karki. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
