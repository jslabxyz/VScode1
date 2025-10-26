import { useState } from "react";
import { X, Menu } from "lucide-react";

interface NavigationProps {
  currentSection: string;
  onNavigate: (section: string) => void;
}

export default function Navigation({ currentSection, onNavigate }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const sections = [
    { id: "about", label: "🧬About Me", color: "border-cyan-400" },
    { id: "experience", label: "⚡Experience", color: "border-red-500" },
    { id: "cybersecurity", label: "🛡️Cybersecurity", color: "border-purple-600" },
    { id: "nocode", label: "⚙️NoCode Development", color: "border-blue-400" },
    { id: "ai", label: "🤖Artificial Intelligence", color: "border-cyan-400" },
    { id: "projects", label: "💡Side Projects & Ideas", color: "border-emerald-600" },
    { id: "contact", label: "💼Work with me", color: "border-orange-500" },
  ];

  const handleNavigate = (sectionId: string) => {
    onNavigate(sectionId);
    setIsOpen(false);
  };

  return (
    <>
      {/* Hamburger Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 p-2 rounded-lg bg-yellow-400 hover:bg-yellow-500 transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-black" />
        ) : (
          <Menu className="w-6 h-6 text-black" />
        )}
      </button>

      {/* Navigation Menu */}
      {isOpen && (
        <div className="fixed top-0 right-0 w-full sm:w-96 h-screen bg-slate-900/95 backdrop-blur-sm z-40 flex flex-col gap-4 p-6 pt-20 overflow-y-auto">
          <h2 className="text-2xl font-bold text-white mb-4">Navigation</h2>
          
          <div className="space-y-3">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleNavigate(section.id)}
                className={`w-full px-4 py-3 rounded-lg border-2 text-left font-semibold transition-all ${
                  currentSection === section.id
                    ? `${section.color} bg-opacity-20 bg-white text-white`
                    : "border-slate-600 text-slate-300 hover:border-slate-400 hover:text-white"
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="mt-auto px-4 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-white transition-colors"
          >
            Close
          </button>
        </div>
      )}

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

