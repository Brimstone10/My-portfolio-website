import React from 'react';
import { Linkedin, Mail, Phone, MapPin, Download } from 'lucide-react';

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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white relative">
        <div className="container mx-auto px-4 py-10">
          <div className="max-w-8xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg flex-shrink-0">
              <img
                src="/profile-pic.jpeg"
                alt="Abhishek Karki"
                className="w-full h-full object-cover"
                loading="eager"
                onError={(e) => {
                  console.error('Image failed to load:', e);
                  e.currentTarget.src = '/placeholder.svg';
                }}
              />
            </div>
            {/* Rest of the component remains unchanged */}
            <div className="flex-1 info-sec text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Abhishek Karki</h1>
              <h2 className="text-xl md:text-2xl mb-6">Quality Assurance Engineer</h2>
              <p className="text-lg mb-8 text-blue-100">
                Offering comprehensive knowledge of testing methodologies and software development cycle. 
                Excellent analytical abilities combined with keen attention to detail.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-6 text-blue-100">
                <a href="mailto:brtabhishek10@gmail.com" className="flex items-center gap-2 hover:text-blue-200 transition-colors">
                  <Mail className="w-5 h-5" />
                  brtabhishek10@gmail.com
                </a>
                <a href="tel:+9779814363802" className="flex items-center gap-2 hover:text-blue-200 transition-colors">
                  <Phone className="w-5 h-5" />
                  +977 9814363802
                </a>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Lazimpat, Kathmandu
                </div>
                <a 
                  href="https://www.linkedin.com/in/abhishek-karki-882076219/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 hover:text-blue-200 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Rest of the component remains unchanged */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Experience Section */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Experience</h2>
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">Software Engineer I</h3>
                    <p className="text-blue-600">Infinite Computer Solutions (formerly Cotiviti Nepal)</p>
                  </div>
                  <span className="text-gray-500">September 2023 - Present</span>
                </div>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Conducted comprehensive API testing using Postman for DxCG healthcare analytics application</li>
                  <li>Performed manual testing and result validation using Beyond Compare</li>
                  <li>Implemented detailed regression testing plans across different environments and databases</li>
                  <li>Conducted performance testing for system scalability evaluation</li>
                  <li>Key role in testing containerized DxCG 6.3 version</li>
                  <li>Collaborated in SAFe environment and delivered product demos to stakeholders</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">Senior Associate QA Engineer</h3>
                    <p className="text-blue-600">TechnoFex Nepal Pvt Ltd</p>
                  </div>
                  <span className="text-gray-500">April 2022 - August 2023</span>
                </div>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Implemented UI automation testing using Selenium C# with XUnit and POM framework</li>
                  <li>Performed API testing using Postman and Swagger</li>
                  <li>Conducted cross-browser testing using BrowserStack</li>
                  <li>Managed bug tracking on Azure DevOps</li>
                  <li>Provided training and knowledge sharing sessions to interns</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">QA Trainee</h3>
                    <p className="text-blue-600">Citytech</p>
                  </div>
                  <span className="text-gray-500">November 2021 - April 2022</span>
                </div>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Handled FinPRO and TradePulse projects for major banks</li>
                  <li>Served as Scrum Master, managing sprint planning and ceremonies</li>
                  <li>Created and maintained test cases and project documentation</li>
                  <li>Performed testing across QAT, QA, and staging environments</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Skills & Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
                <div className="grid grid-cols-1 gap-2">
                  {[
                    "Software testing methodologies",
                    "Test automation (Selenium WebDriver, XUnit)",
                    "API Testing (Postman, Swagger)",
                    "Performance testing (JMeter)",
                    "Database testing (SQL, PostgreSQL)",
                    "Agile/SAFe methodologies",
                    "Test case creation and execution",
                    "Defect tracking and reporting",
                  ].map((skill) => (
                    <div
                      key={skill}
                      className="bg-white px-4 py-2 rounded-lg shadow-sm"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Tools & Platforms</h3>
                <div className="grid grid-cols-1 gap-2">
                  {[
                    "Azure DevOps",
                    "Jira & Confluence",
                    "TestLink",
                    "Selenium",
                    "Postman",
                    "Figma & Adobe XD",
                    "Microsoft Office Suite",
                    "BrowserStack",
                  ].map((tool) => (
                    <div
                      key={tool}
                      className="bg-white px-4 py-2 rounded-lg shadow-sm"
                    >
                      {tool}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Education & Certifications */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Education & Certifications</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold">Education</h3>
                <div className="space-y-4 mt-4">
                  <div>
                    <p className="font-semibold">International Masters in Business Administration</p>
                    <p className="text-blue-600">University of Wolverhampton (Herald College Kathmandu)</p>
                    <p className="text-gray-500">Ongoing</p>
                  </div>
                  <div>
                    <p className="font-semibold">BSc (Hons) Computer Science</p>
                    <p className="text-blue-600">University of Wolverhampton (Herald College Kathmandu)</p>
                    <p className="text-gray-500">2018 - 2022</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold">Certifications</h3>
                <div className="mt-4">
                  <p className="text-lg">ISTQB Advanced Test Automation Engineer Certification</p>
                </div>
              </div>
            </div>
          </section>

          {/* References */}
          <section>
            <h2 className="text-3xl font-bold mb-6">References</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold">Prajwal Adhikari</h3>
              <p className="text-blue-600">Project Manager and InfoSecOps Lead</p>
              <a href="mailto:adhikari.prajwal678@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2 mt-2">
                <Mail className="w-4 h-4" />
                adhikari.prajwal678@gmail.com
              </a>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 text-center">
          <button
            onClick={handleDownload}
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </button>
          <p className="mt-4 text-gray-600">© 2025 Abhishek Karki. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
