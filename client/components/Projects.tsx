import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const project = {
    id: 1,
    title: "Cats vs Dogs Classifier",
    description:
      "AI model that classifies pet images using Convolutional Neural Networks. Built with Python, TensorFlow, and Streamlit for an interactive web interface.",
    image:
      "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&h=400&fit=crop",
    tech: ["Python", "TensorFlow", "CNN", "Streamlit", "Image Classification"],
    githubUrl: "https://github.com/hadi-abdulla-01/CatsVsDogsClassifier",
    liveUrl: "https://dogvscatclassifier.streamlit.app",
    features: [
      "Deep Learning CNN model",
      "Real-time image classification",
      "Interactive Streamlit UI",
      "High accuracy pet detection",
    ],
  };

  return (
    <section id="portfolio" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block border-4 border-white p-4 mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-[0.3em]">
              PROJECTS
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-3xl mx-auto text-lg"
          >
            Showcasing my passion for AI/ML through practical implementations
          </motion.p>
        </div>

        {/* Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
            {/* Project Image */}
            <div className="relative h-64 md:h-80 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
            </div>

            {/* Project Content */}
            <div className="p-8 md:p-12">
              <motion.h3
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-4"
              >
                {project.title}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-gray-300 text-lg leading-relaxed mb-8"
              >
                {project.description}
              </motion.p>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mb-8"
              >
                <h4 className="text-xl font-semibold mb-4">Key Features:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Tech Stack */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mb-8"
              >
                <h4 className="text-lg font-semibold mb-4">
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gray-800 rounded-full text-sm font-medium border border-gray-700 hover:border-blue-500 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center space-x-2 bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                >
                  <Github size={20} />
                  <span>View on GitHub</span>
                </motion.a>

                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center space-x-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors"
                >
                  <ExternalLink size={20} />
                  <span>Live Demo</span>
                </motion.a>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Future Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-xl text-gray-300">
            More exciting AI/ML projects coming soon!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
