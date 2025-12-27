import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: "Python Data Structures",
      issuer: "University of Michigan",
      description:
        "Comprehensive course covering Python data structures including lists, dictionaries, tuples, and sets.",
      date: "2024",
      link: "https://www.coursera.org/account/accomplishments/verify/4PB883HD6NO1",
      color: "from-blue-500 to-blue-700",
    },
    {
      id: 2,
      title: "AI For Everyone",
      issuer: "Andrew Ng",
      description:
        "Introduction to artificial intelligence concepts, applications, and impact on society.",
      date: "2024",
      link: "https://www.coursera.org/account/accomplishments/verify/77WLVRFNIP7X",
      color: "from-green-500 to-green-700",
    },
    {
      id: 3,
      title: "Machine Learning Foundations",
      issuer: "Coursera",
      description:
        "Fundamental concepts in machine learning including supervised and unsupervised learning.",
      date: "2024",
      link: "https://www.coursera.org/account/accomplishments/verify/94ZFXFVJ0R7C",
      color: "from-purple-500 to-purple-700",
    },
  ];

  return (
    <section id="certificates" className="py-20 bg-gray-900">
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
              CERTIFICATES
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed"
          >
            Continuous learning and professional development in AI, ML, and
            programming
          </motion.p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-gray-600">
                {/* Certificate Header */}
                <div
                  className={`h-32 bg-gradient-to-r ${cert.color} flex items-center justify-center relative overflow-hidden`}
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="text-white"
                  >
                    <Award size={48} />
                  </motion.div>

                  {/* Decorative elements */}
                  <div className="absolute top-2 right-2 w-8 h-8 border border-white/20 rounded-full"></div>
                  <div className="absolute bottom-2 left-2 w-6 h-6 border border-white/20 rounded-full"></div>
                </div>

                {/* Certificate Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gray-200 transition-colors">
                    {cert.title}
                  </h3>

                  <p className="text-blue-400 font-semibold mb-3">
                    {cert.issuer}
                  </p>

                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {cert.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">{cert.date}</span>

                    <motion.a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-1 text-blue-400 hover:text-blue-300 transition-colors text-sm font-semibold"
                    >
                      <span>Verify</span>
                      <ExternalLink size={14} />
                    </motion.a>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-300 text-lg mb-4">
            Always eager to learn and expand my knowledge in emerging
            technologies
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-block border-b-2 border-white pb-1 text-white font-semibold cursor-pointer hover:border-gray-300 transition-colors"
          >
            View All Achievements
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
