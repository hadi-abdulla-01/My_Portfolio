import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";
import Experience from "./Experience";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("EXPERIENCE");

  const projects = [
    {
      id: 1,
      title: "DineEzee – Smart Food Ordering Web App",
      description:
        "Co-founded and co-developed a startup-level web platform for smart food ordering and restaurant management. Implemented digital menu management, real-time availability controls, and role-based access.",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=400&fit=crop",
      tech: ["Next.js", "React", "Node.js", "MySQL", "Firebase"],
      githubUrl: "https://github.com/hadi-abdulla-01/",
      liveUrl: "https://dineezee.com",
      features: [
        "Digital menu management",
        "Real-time food availability control",
        "Role-based access controls",
        "Scalable responsive layout",
      ],
    },
    {
      id: 2,
      title: "DineEzee – Mobile App (Flutter)",
      description:
        "Independently designed and developed a Flutter companion mobile application for DineEzee platform. Aligned UI screens, navigation, and state sync with Firebase.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      tech: ["Flutter", "Dart", "Firebase"],
      githubUrl: "https://github.com/hadi-abdulla-01/",
      liveUrl: "",
      features: [
        "Sleek companion mobile app UI",
        "Synced state & navigation features",
        "Integrated Firebase backend services",
        "Native performance on iOS and Android",
      ],
    },
    {
      id: 3,
      title: "Cats vs Dogs Classifier",
      description:
        "Developed a custom deep learning image classification model using Python and TensorFlow. Deployed the model using Streamlit for an interactive real-time web prediction interface.",
      image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&h=400&fit=crop",
      tech: ["Python", "TensorFlow", "CNN", "Streamlit", "Image Classification"],
      githubUrl: "https://github.com/hadi-abdulla-01/CatsVsDogsClassifier",
      liveUrl: "https://dogvscatclassifier.streamlit.app",
      features: [
        "Deep Learning CNN model",
        "Real-time image classification",
        "Interactive Streamlit web interface",
        "High accuracy pet detection",
      ],
    },
    {
      id: 4,
      title: "Personal Portfolio Website",
      description:
        "Created a premium developer portfolio website using React and Tailwind CSS. Features high-performance double-canvas masks and Lissajous wave mobile floating effects.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      tech: ["React", "Tailwind CSS", "Vite", "Framer Motion"],
      githubUrl: "https://github.com/hadi-abdulla-01/",
      liveUrl: "https://hadiabdulla.in",
      features: [
        "Double-canvas hardware acceleration",
        "Feathered cursor-mask interactive reveal",
        "Organic floating movement on mobile",
        "Fully responsive & SEO optimized",
      ],
    },
  ];

  const tabs = ["EXPERIENCE", "PROJECTS"];

  const renderTabContent = () => {
    switch (activeTab) {
      case "EXPERIENCE":
        return <Experience />;

      case "PROJECTS":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-between border border-gray-800 hover:border-gray-700 transition-all duration-300 group"
              >
                <div>
                  {/* Project Image */}
                  <div className="relative h-48 md:h-56 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-white">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold mb-2 text-white uppercase tracking-wider">
                        Key Features:
                      </h4>
                      <div className="space-y-1">
                        {project.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-xs text-gray-300">
                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((t, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 bg-gray-800 rounded-full text-xs font-medium border border-gray-700 hover:border-blue-500 transition-colors text-gray-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="p-6 pt-0 flex gap-3">
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center space-x-2 bg-white text-black py-2.5 rounded-lg text-sm font-semibold hover:bg-gray-200 transition-colors cursor-pointer"
                  >
                    <Github size={16} />
                    <span>GitHub</span>
                  </motion.a>

                  {project.liveUrl ? (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center space-x-2 border border-white text-white py-2.5 rounded-lg text-sm font-semibold hover:bg-white hover:text-black transition-colors cursor-pointer"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </motion.a>
                  ) : null}
                </div>
              </motion.div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="portfolio" className="pt-20 pb-14 bg-black text-white">
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
              PORTFOLIO
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-3xl mx-auto text-lg"
          >
            My journey in AI/ML development, projects, and continuous learning
          </motion.p>
        </div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12 relative"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 font-semibold transition-all relative ${activeTab === tab
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
                }`}
            >
              {tab}
              {activeTab === tab && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
                  initial={false}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {renderTabContent()}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;

