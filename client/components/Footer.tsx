import { motion } from "framer-motion";
import { ArrowUp, Github, Linkedin, Instagram, Mail } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Back to Top Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group flex flex-col items-center space-y-2 mx-auto"
          >
            <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center group-hover:bg-gray-200 transition-colors">
              <ArrowUp size={20} />
            </div>
            <span className="text-sm font-semibold tracking-[0.2em] group-hover:text-gray-300 transition-colors">
              BACK TO TOP
            </span>
          </motion.button>
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold mb-4">Mohammed Hadi Abdulla</h3>
            <p className="text-gray-400 leading-relaxed">
              B.Tech CSE (AI & ML) student passionate about creating intelligent
              solutions and exploring the frontiers of artificial intelligence.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center"
          >
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <div className="space-y-3">
              {[
                { name: "About", href: "#about" },
                { name: "Skills", href: "#skills" },
                { name: "Portfolio", href: "#portfolio" },
                { name: "Contact", href: "#contact" },
              ].map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  whileHover={{ x: 5 }}
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById(link.href.slice(1))
                      ?.scrollIntoView({
                        behavior: "smooth",
                      });
                  }}
                  className="block text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center md:text-right"
          >
            <h4 className="text-lg font-semibold mb-6">Get in Touch</h4>
            <div className="space-y-3">
              <p className="text-gray-400">mhadiabdulla4@gmail.com</p>
              <p className="text-gray-400">B.Tech CSE (AI & ML)</p>
              <p className="text-gray-400">India</p>
            </div>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center space-x-6 mb-12"
        >
          {[
            {
              icon: <Mail size={20} />,
              href: "mailto:mhadiabdulla4@gmail.com",
              label: "Email",
            },
            {
              icon: <Github size={20} />,
              href: "https://github.com/hadi-abdulla-01/",
              label: "GitHub",
            },
            {
              icon: <Linkedin size={20} />,
              href: "https://www.linkedin.com/in/mohammed-hadi-abdulla-4033782b5/",
              label: "LinkedIn",
            },
            {
              icon: <Instagram size={20} />,
              href: "https://www.instagram.com/hadi_abdulla_/",
              label: "Instagram",
            },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel={
                social.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors group"
              aria-label={social.label}
            >
              <span className="text-gray-400 group-hover:text-white transition-colors">
                {social.icon}
              </span>
            </motion.a>
          ))}
        </motion.div>

        {/* Separator */}
        <div className="w-full h-px bg-gray-800 mb-8"></div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-400 text-sm">
            © {currentYear} Mohammed Hadi Abdulla. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Designed and developed with ❤️ using React & TypeScript
          </p>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
      </div>
    </footer>
  );
};

export default Footer;
