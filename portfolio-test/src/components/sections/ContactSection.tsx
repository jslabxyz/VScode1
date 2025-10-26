import { X, Linkedin } from "lucide-react";

interface ContactSectionProps {
  onClose: () => void;
}

export default function ContactSection({ onClose }: ContactSectionProps) {
  return (
    <div className="full-screen section-bg-contact relative overflow-hidden">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-20 p-2 rounded-lg bg-white/20 hover:bg-white/30 transition-colors"
      >
        <X className="w-6 h-6 text-white" />
      </button>

      {/* Main Content */}
      <div className="section-container relative z-10 px-4">
        <div className="max-w-2xl w-full space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-5xl sm:text-6xl font-bold text-white">
              💼 Work with me
            </h1>
          </div>

          {/* Contact Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 space-y-6">
            <p className="text-lg text-white leading-relaxed">
              I am open to freelance gigs for development projects using{" "}
              <span className="font-semibold">bolt.new</span>. My rate is{" "}
              <span className="font-bold text-xl">$95 an hour</span>. If you're interested
              please send me a connection request on LinkedIn with a message about the details
              of your project.
            </p>

            {/* Services List */}
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-white">Services I Offer:</h3>
              <ul className="space-y-2">
                {[
                  "Web Development with Bolt.new",
                  "NoCode Solutions & Automation",
                  "Security Consulting",
                  "Technical Architecture Design",
                  "API Integration & Development",
                  "Database Design & Optimization",
                ].map((service, idx) => (
                  <li key={idx} className="text-white/80 flex gap-3 items-start">
                    <span className="text-white/60 mt-1">✓</span>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* LinkedIn Button */}
            <a
              href="https://www.linkedin.com/in/colinwinhall/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full px-6 py-4 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold transition-all flex items-center justify-center gap-3 group"
            >
              <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Connect on LinkedIn</span>
            </a>
          </div>

          {/* Additional Info */}
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <p className="text-white/70 text-sm text-center">
              Looking forward to hearing from you! Let's build something amazing together.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

