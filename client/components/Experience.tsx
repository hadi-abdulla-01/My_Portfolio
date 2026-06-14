import { motion } from "framer-motion";
import { Building, Calendar, MapPin, Code } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Bluestock Fintech",
      position: "Software Development Engineer (SDE) Intern",
      location: "Remote",
      duration: "2 MONTHS INTERNSHIP",
      description:
        "Contributed to development and improvement of fintech-based web applications. Worked with frontend and backend technologies to build scalable features. Collaborated with team members in an agile environment and participated in code reviews.",
      skills: [
        "Software Engineering",
        "Frontend & Backend Integration",
        "Debugging & Troubleshooting",
        "Agile & Scrum Methodologies",
        "Version Control (Git)"
      ],
      achievements: [
        "Contributed to development and improvement of fintech-based web applications",
        "Worked with frontend and backend technologies to build scalable features",
        "Collaborated with team members in an agile environment and participated in code reviews",
        "Gained hands-on experience in real-world software development workflows and debugging"
      ],
      logo: "https://media.licdn.com/dms/image/v2/D560BAQFzWp3nUjX02A/company-logo_200_200/company-logo_200_200/0/1715694762002?e=1743638400&v=beta&t=7wQWbA09q8j_lT5uO8gCjG2j0xO1yLg1z0z0z0z0z0z",
      fallbackColor: "bg-blue-600"
    },
    {
      company: "Novolo AI",
      position: "AI Intern",
      location: "Remote, USA",
      duration: "3 WEEKS INTERNSHIP",
      description:
        "Worked on AI-related tasks involving data handling and model understanding. Gained exposure to real-world AI workflows and remote collaboration.",
      skills: [
        "AI Workflows",
        "Data Handling",
        "Model Understanding",
        "Remote Collaboration"
      ],
      achievements: [
        "Worked on AI-related tasks involving data handling and model understanding",
        "Gained exposure to real-world AI workflows and remote collaboration"
      ],
      logo: "https://media.licdn.com/dms/image/v2/C4D0BAQGQb7qyU1GU_Q/company-logo_200_200/company-logo_200_200/0/1644838079005?e=1743638400&v=beta&t=_Z8gQf0kXVPaWEkP6FhNqtfnV4WqCBYUBtpktQGOhEA",
      fallbackColor: "bg-purple-600"
    }
  ];

  return (
    <div className="space-y-12">
      {experiences.map((exp, expIdx) => (
        <motion.div
          key={expIdx}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: expIdx * 0.1 }}
          className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-xl p-8 text-white relative overflow-hidden shadow-xl"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>

          <div className="relative z-10">
            {/* Company Header */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center p-2 flex-shrink-0">
                  <img
                    src={exp.logo}
                    alt={`${exp.company} Logo`}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      const nextEl = e.currentTarget.nextElementSibling as HTMLElement;
                      if (nextEl) nextEl.style.display = "flex";
                    }}
                  />
                  <div
                    className={`w-full h-full ${exp.fallbackColor} rounded-lg hidden items-center justify-center`}
                  >
                    <Building size={24} className="text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{exp.company}</h3>
                  <p className="text-blue-200 font-semibold">
                    {exp.position}
                  </p>
                </div>
              </div>
            </div>

            {/* Experience Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center space-x-2">
                <Calendar className="text-blue-300" size={18} />
                <span>{exp.duration}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="text-blue-300" size={18} />
                <span>{exp.location}</span>
              </div>
            </div>

            <p className="text-gray-100 leading-relaxed mb-6">
              {exp.description}
            </p>

            {/* Skills Learned */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3 flex items-center">
                <Code className="mr-2" size={20} />
                Skills Developed
              </h4>
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-white/20 rounded-lg px-3 py-1.5 text-xs font-medium"
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
                {exp.achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start space-x-2"
                  >
                    <div className="w-1.5 h-1.5 bg-blue-300 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-100 text-sm leading-relaxed">{achievement}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Experience;
