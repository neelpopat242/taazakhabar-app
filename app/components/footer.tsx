// import Link from 'next/link';
import { Github, Linkedin, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-blue-500">Retor</span>
              <span className="text-2xl font-bold text-white">Tech</span>
              <span className="text-2xl font-bold text-emerald-500">.</span>
            </div>
            <p className="text-sm text-gray-400 max-w-xs">
              Building digital products that work. Helping startups and SMEs
              ship full-stack apps, faster.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/retor-tech/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://wa.me/917861838177"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <span className="text-emerald-500">✉️</span>
                <span>hello@retor.tech</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-emerald-500">📍</span>
                <span>HSR Layout, Bengaluru</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-emerald-500">📞</span>
                <span>+91 78618 38177</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-xs text-gray-500">
          © {currentYear} Retor Tech. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
