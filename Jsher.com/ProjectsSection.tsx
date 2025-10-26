import { X, ExternalLink } from "lucide-react";

interface ProjectsSectionProps {
  onClose: () => void;
}

const projects = [
  {
    title: "Pixel Beam",
    description:
      "A physical product that I've been theorising and working on for 11 years. Still actively working on it (slowly). Combines the power of a flash with the functionality of a projector to produce 'Digital Light'. Allowing you to project digital images on subjects that can be powered by algorithms.",
    status: "In Development",
    link: "https://pixelbeam.carrd.co/",
    icon: "💡",
  },
  {
    title: "NoCode Community",
    description:
      "Building and nurturing communities around NoCode tools and platforms. Helping people discover the power of building without code.",
    status: "Active",
    link: "#",
    icon: "🤝",
  },
  {
    title: "Security Awareness",
    description:
      "Creating educational content and resources to help organizations and individuals understand cybersecurity best practices.",
    status: "Ongoing",
    link: "#",
    icon: "🛡️",
  },
];

export default function ProjectsSection({ onClose }: ProjectsSectionProps) {
  return (
    <div className="full-screen section-bg-projects relative overflow-hidden">
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
          <div className="text-center space-y-4">
            <h1 className="text-5xl sm:text-6xl font-bold text-white">
              Side Projects & Ideas
            </h1>
            <p className="text-lg text-white/90">Things I'm working on and passionate about</p>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-colors"
              >
                <div className="space-y-4">
                  {/* Title with Icon */}
                  <div className="flex items-start gap-4">
                    <div className="text-5xl">{project.icon}</div>
                    <div className="flex-1">
                      <h2 className="text-3xl font-bold text-white">
                        {project.title}
                      </h2>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="px-3 py-1 rounded-full bg-white/20 text-white text-sm font-semibold">
                          {project.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-white/80 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Link */}
                  {project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/20 hover:bg-white/30 text-white transition-colors"
                    >
                      <span>Visit Project</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">Always Ideating</h3>
            <p className="text-white/80 leading-relaxed">
              I'm constantly thinking about new ideas and projects. If you have an interesting
              project in mind or want to collaborate, feel free to reach out. I'm always open to
              discussing new opportunities and innovations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

