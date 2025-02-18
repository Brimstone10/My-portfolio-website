
import React from 'react';
import { Mail, Phone } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0B0B1E] text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Profile Card */}
          <div className="relative bg-gradient-to-br from-purple-900 to-blue-900 rounded-3xl p-8">
            <div className="flex flex-col items-center text-center">
              {/* Profile Image */}
              <div className="w-40 h-40 rounded-3xl overflow-hidden mb-6 bg-gradient-to-r from-purple-500 to-blue-500 p-1">
                <img
                  src="/profile-pic.jpeg"
                  alt="Abhishek Karki"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <h1 className="text-4xl font-bold mb-2">Abhishek Karki</h1>
              <h2 className="text-xl text-purple-200 mb-6">Quality Assurance Engineer</h2>
              
              {/* Contact Info */}
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">brtabhishek10@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">+977 9814363802</span>
                </div>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-6">About</h2>
            <p className="text-purple-200 mb-8">
              With over 2+ years of experience, I specialize in ensuring the delivery of high-quality software through rigorous testing methodologies.
            </p>

            {/* Experience Timeline */}
            <div className="space-y-6">
              <ExperienceItem
                title="Software Engineer I"
                company="Infinite Computer Solutions"
                date="2023-Present"
              />
              <ExperienceItem
                title="Senior Associate QA Engineer"
                company="TechnoFex Nepal Pvt Ltd"
                date="2022-2023"
              />
              <ExperienceItem
                title="QA Trainee"
                company="Citytech"
                date="2021-2022"
              />
            </div>
          </div>

          {/* Projects Section */}
          <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-3xl p-8">
            <div className="inline-block bg-purple-500/20 rounded-full px-4 py-1 text-sm mb-6">
              PROJECTS
            </div>
            <h2 className="text-3xl font-bold mb-6">End-to-End Testing for Healthcare Analytics Platform</h2>
            
            <div className="bg-white/5 rounded-3xl p-6 space-y-6">
              <ProjectSection
                title="Objective"
                description="Ensure comprehensive testing coverage for DxCG healthcare analytics platform"
              />
              <ProjectSection
                title="Role"
                description="Led end-to-end testing efforts, including test case design, execution, and reporting"
              />
              <ProjectSection
                title="Outcome"
                description="Successfully validated critical functionalities, ensuring smooth deployment of DxCG 6.3"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ExperienceItem = ({ title, company, date }: { title: string; company: string; date: string }) => (
  <div className="flex items-center gap-4">
    <div className="w-3 h-3 rounded-full bg-purple-500" />
    <div className="flex-1 bg-white/5 rounded-xl p-4">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-purple-200 text-sm">{company}</p>
      <p className="text-xs text-purple-300">{date}</p>
    </div>
  </div>
);

const ProjectSection = ({ title, description }: { title: string; description: string }) => (
  <div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-purple-200">{description}</p>
  </div>
);

export default Index;
