import { X } from "lucide-react";

interface ExperienceSectionProps {
  onClose: () => void;
}

const experiences = [
  {
    title: "Baserow Specialist",
    company: "Baserow",
    dates: "05/2024 - current",
    location: "Remote",
    responsibilities: [
      "Provide technical support to enterprise clients",
      "Provide enterprise onboarding and training",
      "Create database schemas based on client requirements",
      "Create applications based on client requirements",
      "Create education content, including tutorials, documentation and video content",
    ],
  },
  {
    title: "Technical Product Specialist",
    company: "Rows",
    dates: "11/2022 - 01/2024",
    location: "Remote",
    responsibilities: [
      "Support customers with technical issues and feature questions",
      "Collaborate with product team on feature requests",
      "Create documentation and educational content",
      "Participate in community management and engagement",
    ],
  },
  {
    title: "Senior Customer & Community Advocate",
    company: "Adalo",
    dates: "08/2020 - 07/2022",
    location: "Remote",
    responsibilities: [
      "Led community engagement and support initiatives",
      "Managed customer success programs",
      "Created educational content and tutorials",
      "Advocated for customer needs within the organization",
    ],
  },
  {
    title: "Various Roles",
    company: "Multiple Companies",
    dates: "2015 - 2020",
    location: "Various",
    responsibilities: [
      "Gained experience in tech support and customer success",
      "Developed skills in problem-solving and communication",
      "Built foundation for NoCode and security expertise",
    ],
  },
];

export default function ExperienceSection({ onClose }: ExperienceSectionProps) {
  return (
    <div className="full-screen section-bg-experience relative overflow-hidden">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-20 p-2 rounded-lg bg-white/20 hover:bg-white/30 transition-colors"
      >
        <X className="w-6 h-6 text-white" />
      </button>

      {/* Main Content */}
      <div className="w-full h-full overflow-y-auto py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-5xl sm:text-6xl font-bold text-white">Experience</h1>
            <p className="text-lg text-white/90">My professional journey in tech</p>
          </div>

          {/* Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-colors"
              >
                <div className="space-y-4">
                  {/* Job Title and Company */}
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white">
                      {exp.title}
                    </h2>
                    <p className="text-lg text-white/80">{exp.company}</p>
                  </div>

                  {/* Dates and Location */}
                  <div className="flex flex-col sm:flex-row gap-4 text-white/70">
                    <span className="flex items-center gap-2">
                      📅 {exp.dates}
                    </span>
                    <span className="flex items-center gap-2">
                      📍 {exp.location}
                    </span>
                  </div>

                  {/* Responsibilities */}
                  <div className="space-y-2">
                    <p className="text-white font-semibold">Key Responsibilities:</p>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <li
                          key={idx}
                          className="text-white/80 flex gap-3 items-start"
                        >
                          <span className="text-white/60 mt-1">•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

