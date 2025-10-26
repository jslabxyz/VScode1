import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface AboutMeSectionProps {
  onClose: () => void;
}

const slides = [
  {
    title: "Tech Enthusiast",
    icon: "🧬",
    content: "I am a tech enthusiast with a deep-rooted love for everything digital and its potential to bring about positive change. Throughout my career, I've enjoyed diving deep into problem-solving, getting my hands on new technologies and making these technologies my competitive advantage. It's what gets me out of bed every morning, excited to take on the day.",
  },
  {
    title: "Security Advocate",
    icon: "🛡️",
    content: "A big part of my mission is to make the digital world safer and more secure. I firmly believe in the importance of cybersecurity as both a tech necessity and a moral commitment. My work history is filled with experiences in this realm, such as leading BugBounty programs and preparing for ISO 27001 audits. It's more than a job for me; it's about doing what's right.",
  },
  {
    title: "NoCode Pioneer",
    icon: "⚙️",
    content: "I've been at the forefront of the NoCode revolution, helping businesses and individuals build powerful applications without writing a single line of code. This democratization of software development is one of the most exciting movements in tech today.",
  },
  {
    title: "Continuous Learner",
    icon: "📚",
    content: "Technology evolves rapidly, and I'm committed to staying ahead of the curve. I'm constantly learning new tools, frameworks, and methodologies to provide the best solutions for my clients and community.",
  },
];

export default function AboutMeSection({ onClose }: AboutMeSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const slide = slides[currentSlide];

  return (
    <div className="full-screen section-bg-about relative overflow-hidden">
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
            <div className="text-6xl">{slide.icon}</div>
            <h1 className="text-5xl sm:text-6xl font-bold text-white">{slide.title}</h1>
          </div>

          {/* Content */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 space-y-6">
            <p className="text-lg sm:text-xl text-white leading-relaxed">
              {slide.content}
            </p>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6">
            <button
              onClick={goToPrevious}
              className="p-3 rounded-lg bg-white/20 hover:bg-white/30 transition-colors text-white"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="text-white font-semibold text-lg">
              {currentSlide + 1} / {slides.length}
            </div>

            <button
              onClick={goToNext}
              className="p-3 rounded-lg bg-white/20 hover:bg-white/30 transition-colors text-white"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide
                    ? "bg-white w-8"
                    : "bg-white/50 hover:bg-white/75"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

