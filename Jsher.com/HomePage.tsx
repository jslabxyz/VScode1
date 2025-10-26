import { useEffect, useState } from "react";

interface HomePageProps {
  onSectionSelect: (section: string) => void;
}

export default function HomePage({ onSectionSelect }: HomePageProps) {
  const [slideCounter, setSlideCounter] = useState(0);

  // Floating icons for background
  const icons = [
    "🧬", "⚡", "🛡️", "⚙️", "🤖", "💡", "💼", "🔒", "🚀", "💻",
    "🎨", "📱", "🌐", "🔧", "📊", "🎯", "💡", "🔐", "📈", "🌟"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideCounter((prev) => (prev + 1) % 21);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="full-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Floating Icons Background */}
      <div className="absolute inset-0 overflow-hidden">
        {icons.map((icon, index) => (
          <div
            key={index}
            className="absolute text-4xl opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${4 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          >
            {icon}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="section-container relative z-10">
        <div className="text-center space-y-6 px-4">
          <h1 className="text-5xl sm:text-7xl font-bold text-white">Hello!</h1>
          
          <div className="space-y-2">
            <h2 className="text-4xl sm:text-6xl font-bold glow-text">I'm</h2>
            <h2 className="text-5xl sm:text-7xl font-bold glow-text">Colin Winhall</h2>
          </div>

          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto">
            Tech enthusiast, security advocate, and NoCode developer passionate about building amazing digital experiences.
          </p>

          {/* Slide Counter */}
          <div className="flex justify-center gap-4 pt-8">
            <button
              onClick={() => setSlideCounter((prev) => (prev - 1 + 21) % 21)}
              className="px-4 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-white transition-colors"
            >
              ←
            </button>
            <div className="px-6 py-2 rounded-lg bg-slate-700 text-white font-semibold">
              {slideCounter}/21
            </div>
            <button
              onClick={() => setSlideCounter((prev) => (prev + 1) % 21)}
              className="px-4 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-white transition-colors"
            >
              →
            </button>
          </div>
        </div>
      </div>

      {/* Shape Settings Button */}
      <button className="fixed bottom-4 left-4 px-4 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-white transition-colors flex items-center gap-2">
        <span>⚙️</span>
        <span>Shape Settings</span>
      </button>

      {/* CSS for floating animation */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
      `}</style>
    </div>
  );
}

