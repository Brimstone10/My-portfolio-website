
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import ContactItem from './ContactItem';

const ProfileSection = () => {
  return (
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
  );
};

export default ProfileSection;
