import { motion } from "framer-motion";
import { Building, Calendar, MapPin, Code } from "lucide-react";

const Experience = () => {
  const experience = {
    company: "Novolo AI",
    position: "AI/ML Intern",
    location: "United States (Remote)",
    duration: "JUNE 2025 (3 WEEKS INTERNSHIP)",
    description:
      "Gained hands-on experience in building AI/ML programs and working with cutting-edge artificial intelligence technologies. Collaborated with the UK-based team to develop intelligent solutions and learned industry best practices in machine learning development.",
    skills: [
      "Machine Learning Development",
      "AI Model Implementation",
      "Python Programming",
      "Data Analysis",
      "Neural Networks",
      "Model Training & Optimization",
    ],
    achievements: [
      "Successfully built and deployed AI/ML programs",
      "Collaborated with international team members",
      "Gained practical experience in production AI systems",
      "Learned industry-standard ML development workflows",
    ],
  };

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-xl p-8 text-white relative overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>

        <div className="relative z-10">
          {/* Company Header */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center p-2">
                <img
                  src="https://media.licdn.com/dms/image/v2/C4D0BAQGQb7qyU1GU_Q/company-logo_200_200/company-logo_200_200/0/1644838079005?e=1743638400&v=beta&t=_Z8gQf0kXVPaWEkP6FhNqtfnV4WqCBYUBtpktQGOhEA"
                  alt="Novolo AI Logo"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.nextElementSibling!.style.display = "flex";
                  }}
                />
                <div
                  className="w-full h-full bg-blue-600 rounded-lg hidden items-center justify-center"
                  style={{
                    backgroundImage:
                      "url(https://cdn.builder.io/api/v1/image/assets%2F48f38dd7864840a29a4407bd35c95052%2F088d2b4b6986413590fd85ffbf4250e3)",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    borderStyle: "none",
                    borderWidth: "1px",
                  }}
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold">{experience.company}</h3>
                <p className="text-blue-200 font-semibold">
                  {experience.position}
                </p>
              </div>
            </div>
          </div>

          {/* Experience Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="flex items-center space-x-2">
              <Calendar className="text-blue-300" size={18} />
              <span>{experience.duration}</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="text-blue-300" size={18} />
              <span>{experience.location}</span>
            </div>
          </div>

          <p className="text-gray-100 leading-relaxed mb-6">
            {experience.description}
          </p>

          {/* Skills Learned */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-3 flex items-center">
              <Code className="mr-2" size={20} />
              Skills Developed
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {experience.skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/20 rounded-lg px-3 py-2 text-sm"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Key Achievements */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Key Achievements</h4>
            <div className="space-y-2">
              {experience.achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-2"
                >
                  <div className="w-2 h-2 bg-blue-300 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-100">{achievement}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;
