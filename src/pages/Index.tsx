import React from 'react';
import { Download, Building2, GraduationCap, Award, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/layout/Header';
import ProfileSection from '@/components/resume/ProfileSection';
import ExperienceItem from '@/components/resume/ExperienceItem';
import SkillsGroup from '@/components/resume/SkillsGroup';
import EducationItem from '@/components/resume/EducationItem';
import ProjectCard from '@/components/portfolio/ProjectCard';
import ContactForm from '@/components/contact/ContactForm';

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

  // Updated project data with Kiibank and Global IME Bank
  const projects = [
    {
      title: "DxCG Intelligence, Licence Server and Usage log Viewer ",
      description: "Comprehensive testing solution for DxCG healthcare analytics application",
      problem: "Need for robust testing of complex healthcare data processing system",
      approach: "Implemented detailed API testing and regression testing plans",
      tools: ["Postman", "Beyond Compare", "Docker"],
      outcome: "Successfully validated containerized DxCG 6.3 version",
      image: "/healthcare-analytics.jpg"
    },
    {
      title: "YIRIFI.AI",
      description: "Digital Assets Compliance and Monitoring Platform",
      problem: "End to end testing of the platform with automation",
      approach: "Implemented test plans, test cases and automation scripts",
      tools: ["Swagger", "Selenium", "Docker"],
      outcome: "Successfully verified and deployed the application with high quality standards in production",
      image: "/yirifi.jpg"
    },
    {
      title: "Kiibank Web & Mobile App",
      description: "Comprehensive banking solution with web and mobile applications",
      problem: "Need for a modern, user-friendly banking platform accessible via web and mobile",
      approach: "Implemented thorough testing strategies for both web and mobile applications",
      tools: ["Selenium", "Appium", "Postman", "TestNG", "Jenkins"],
      outcome: "Successfully validated and deployed both web and mobile applications with high quality standards",
      image: "/kiibank-image.jpg"
    },
    {
      title: "Global IME Bank Web Portal",
      description: "Web-based banking portal for comprehensive banking services",
      problem: "Required robust testing of complex banking transactions and user interactions",
      approach: "Conducted extensive testing of web portal functionality and security features",
      tools: ["Selenium", "JMeter", "Postman", "Azure DevOps"],
      outcome: "Ensured secure and reliable banking operations through comprehensive testing",
      image: "/ime.jpg"
    },
    
  ];

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

      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-20">
          {/* Home Section */}
          <section id="home" className="pt-20">
            <ProfileSection />
          </section>

          {/* About Section */}
          <section id="about" className="scroll-mt-20">
            <motion.div 
              className="space-y-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Experience Section */}
              <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-3xl p-8">
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
                      <><Mail className="inline w-4 h-4 mr-2" />Conducted comprehensive API testing using Postman for DxCG healthcare analytics application</>,
                      <><Mail className="inline w-4 h-4 mr-2" />Performed manual testing and result validation using Beyond Compare</>,
                      <><Mail className="inline w-4 h-4 mr-2" />Implemented detailed regression testing plans across different environments and databases</>,
                      <><Mail className="inline w-4 h-4 mr-2" />Conducted performance testing for system scalability evaluation</>,
                      <><Mail className="inline w-4 h-4 mr-2" />Key role in testing containerized DxCG 6.3 version</>,
                      <><Mail className="inline w-4 h-4 mr-2" />Collaborated in SAFe environment and delivered product demos to stakeholders</>
                    ]}
                  />
                   <ExperienceItem
                    title="Quality Assurance Engineer"
                    company="Yirifi.ai Pte. Ltd."
                    date="Freelance"
                    responsibilities={[
                      <><Mail className="inline w-4 h-4 mr-2" />Test Case Preparation: Creating detailed and comprehensive test cases for various applications</>,
                      <><Mail className="inline w-4 h-4 mr-2" />Test Data Preparation: Generating test data for various testing scenarios</>,
                      <><Mail className="inline w-4 h-4 mr-2" />API Testing: Conducting API tests to verify functionality, security, and performance</>,
                      <><Mail className="inline w-4 h-4 mr-2" />Load Testing: Performing load and stress tests to assess application performance</>,
                      <><Mail className="inline w-4 h-4 mr-2" />UI Testing: Testing web applications for usability and responsiveness</>,
                      <><Mail className="inline w-4 h-4 mr-2" />Automation using Selenium (Java in Headless Mode)</>,
                      <><Mail className="inline w-4 h-4 mr-2" />Requirements Analysis and UAT Report Preparation</>,
                      <><Mail className="inline w-4 h-4 mr-2" />Web Application Testing: Conducting end-to-end testing</>
                    ]}
                  />
                  <ExperienceItem
                    title="Senior Associate QA Engineer"
                    company="TechnoFex Nepal Pvt Ltd"
                    date="April 2022 - August 2023"
                    responsibilities={[
                      <><Mail className="inline w-4 h-4 mr-2" />Implemented UI automation testing using Selenium C# with XUnit and POM framework</>,
                      <><Mail className="inline w-4 h-4 mr-2" />Performed API testing using Postman and Swagger</>,
                      <><Mail className="inline w-4 h-4 mr-2" />Conducted cross-browser testing using BrowserStack</>,
                      <><Mail className="inline w-4 h-4 mr-2" />Managed bug tracking on Azure DevOps</>,
                      <><Mail className="inline w-4 h-4 mr-2" />Provided training and knowledge sharing sessions to interns</>
                    ]}
                  />
                  <ExperienceItem
                    title="QA Trainee"
                    company="Citytech"
                    date="November 2021 - April 2022"
                    responsibilities={[
                      <><Mail className="inline w-4 h-4 mr-2" />Handled FinPRO and TradePulse projects for major banks</>,
                      <><Mail className="inline w-4 h-4 mr-2" />Served as Scrum Master, managing sprint planning and ceremonies</>,
                      <><Mail className="inline w-4 h-4 mr-2" />Created and maintained test cases and project documentation</>,
                      <><Mail className="inline w-4 h-4 mr-2" />Performed testing across QAT, QA, and staging environments</>
                    ]}
                  />
                </div>
              </div>

              {/* Skills Section */}
              <div id="skills" className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-3xl p-8">
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
              </div>

              {/* Education & Certifications Section */}
              <div id="education" className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-3xl p-8">
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
              </div>
            </motion.div>
          </section>

          {/* Portfolio Section */}
          <section id="portfolio" className="scroll-mt-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                  <ProjectCard key={index} {...project} />
                ))}
              </div>
            </motion.div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="scroll-mt-20">
            <motion.div
              className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-3xl p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                  <div className="space-y-4 text-purple-200">
                    <p>Feel free to reach out for collaborations or just a friendly hello!</p>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      brtabhishek10@gmail.com
                    </div>
                  </div>
                </div>
                <ContactForm />
              </div>
            </motion.div>
          </section>

          {/* Download Resume Button */}
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
