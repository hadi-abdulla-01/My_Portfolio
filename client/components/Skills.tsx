import { motion } from "framer-motion";

const Skills = () => {
  const currentSkills = [
    {
      name: "PYTHON",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      color: "bg-blue-500",
    },
    {
      name: "JAVA",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      color: "bg-red-500",
    },
    {
      name: "REACT",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      color: "bg-cyan-500",
    },
    {
      name: "TAILWIND CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      color: "bg-teal-500",
    },
    {
      name: "MYSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      color: "bg-orange-500",
    },
    {
      name: "GIT",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      color: "bg-gray-600",
    },
    {
      name: "STREAMLIT",
      icon: "https://streamlit.io/images/brand/streamlit-mark-color.svg",
      color: "bg-red-600",
    },
    {
      name: "FIGMA",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      color: "bg-purple-500",
    },
    {
      name: "TENSORFLOW",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
      color: "bg-amber-500",
    },
  ];

  const learningSkills = [
    {
      name: "FLUTTER",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
      color: "bg-blue-400",
    },
    {
      name: "DJANGO",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
      color: "bg-green-600",
    },
    {
      name: "MONGODB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      color: "bg-green-500",
    },
    {
      name: "NEXT.JS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      color: "bg-black",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block border-4 border-white p-4 mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-[0.3em] text-white">
              SKILLS
            </h2>
          </motion.div>
        </div>

        {/* Current Skills */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-center mb-12 tracking-wider text-white"
          >
            CURRENT SKILLS
          </motion.h3>

          <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-6">
            {currentSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: { type: "spring", stiffness: 300 },
                }}
                className="flex flex-col items-center group cursor-pointer"
              >
                {/* Icon Container */}
                <motion.div
                  whileHover={{ rotate: 5 }}
                  className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow mb-3 p-3"
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      e.currentTarget.nextElementSibling!.style.display =
                        "flex";
                    }}
                  />
                  <div
                    className={`w-full h-full ${skill.color} rounded-lg hidden items-center justify-center text-white text-lg font-bold`}
                  >
                    {skill.name.charAt(0)}
                  </div>
                </motion.div>

                {/* Skill Name */}
                <h4 className="text-center font-semibold text-xs md:text-sm tracking-wider text-white group-hover:text-gray-300 transition-colors">
                  {skill.name}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Learning Skills */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-center mb-12 tracking-wider text-white"
          >
            CURRENTLY LEARNING
          </motion.h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
            {learningSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: { type: "spring", stiffness: 300 },
                }}
                className="flex flex-col items-center group cursor-pointer relative"
              >
                {/* Learning Badge */}
                <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs px-2 py-1 rounded-full font-bold z-10">
                  NEW
                </span>

                {/* Icon Container */}
                <motion.div
                  whileHover={{ rotate: 5 }}
                  className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow mb-4 p-4"
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      e.currentTarget.nextElementSibling!.style.display =
                        "flex";
                    }}
                  />
                  <div
                    className={`w-full h-full ${skill.color} rounded-lg hidden items-center justify-center text-white text-xl font-bold`}
                  >
                    {skill.name.charAt(0)}
                  </div>
                </motion.div>

                {/* Skill Name */}
                <h4 className="text-center font-semibold text-sm md:text-base tracking-wider text-white group-hover:text-gray-300 transition-colors">
                  {skill.name}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            Passionate about AI/ML technologies and continuously learning new
            tools to build innovative solutions. Always exploring the latest
            frameworks and technologies in the field.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
