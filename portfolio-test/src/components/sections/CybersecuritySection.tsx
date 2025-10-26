import { X } from "lucide-react";
import { useState } from "react";

interface CybersecuritySectionProps {
  onClose: () => void;
}

const chapters = [
  {
    id: "tldr",
    title: "TL;DR",
    content: "Cybersecurity is not just a technical concern—it's a fundamental responsibility. I've dedicated significant effort to understanding security best practices, leading bug bounty programs, and preparing organizations for ISO 27001 compliance.",
  },
  {
    id: "fullstory",
    title: "Full Story",
    content: "My journey into cybersecurity started with a realization: technology is powerful, but without proper security measures, it can cause harm. I've invested in learning about threat modeling, vulnerability assessment, secure coding practices, and compliance frameworks. Every project I work on includes security as a first-class concern.",
  },
  {
    id: "resources",
    title: "Resources",
    content: "I believe in sharing knowledge. I regularly create content about cybersecurity best practices, participate in security communities, and help others understand the importance of digital security. Whether it's through articles, videos, or direct mentoring, I'm committed to raising security awareness.",
  },
];

export default function CybersecuritySection({ onClose }: CybersecuritySectionProps) {
  const [activeTab, setActiveTab] = useState("tldr");
  const activeChapter = chapters.find((ch) => ch.id === activeTab);

  return (
    <div className="full-screen section-bg-cyber relative overflow-hidden">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-20 p-2 rounded-lg bg-white/20 hover:bg-white/30 transition-colors"
      >
        <X className="w-6 h-6 text-white" />
      </button>

      {/* Main Content */}
      <div className="section-container relative z-10 px-4">
        <div className="max-w-3xl w-full space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-5xl sm:text-6xl font-bold text-white">Cybersecurity</h1>
            <p className="text-lg text-white/90">Security is a journey, not a destination</p>
          </div>

          {/* Tab Navigation */}
          <div className="flex gap-4 justify-center flex-wrap">
            {chapters.map((chapter) => (
              <button
                key={chapter.id}
                onClick={() => setActiveTab(chapter.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === chapter.id
                    ? "bg-white text-purple-700 shadow-lg"
                    : "bg-white/20 text-white hover:bg-white/30"
                }`}
              >
                {chapter.title}
              </button>
            ))}
          </div>

          {/* Content */}
          {activeChapter && (
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 space-y-6 border border-white/20">
              <h2 className="text-3xl font-bold text-white">{activeChapter.title}</h2>
              <p className="text-lg text-white/90 leading-relaxed">
                {activeChapter.content}
              </p>

              {/* Additional content based on tab */}
              {activeChapter.id === "resources" && (
                <div className="space-y-4 pt-4">
                  <h3 className="text-xl font-semibold text-white">Key Areas:</h3>
                  <ul className="space-y-2">
                    {[
                      "Threat Modeling & Risk Assessment",
                      "Vulnerability Management",
                      "Secure Coding Practices",
                      "ISO 27001 Compliance",
                      "Bug Bounty Programs",
                      "Security Awareness Training",
                    ].map((item, idx) => (
                      <li key={idx} className="text-white/80 flex gap-3 items-start">
                        <span className="text-white/60">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

