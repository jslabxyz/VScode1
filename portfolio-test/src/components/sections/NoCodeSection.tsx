import { X } from "lucide-react";
import { useState } from "react";

interface NoCodeSectionProps {
  onClose: () => void;
}

const tabs = [
  {
    id: "html",
    title: "The HTML Days",
    description: "Watch as we write our first HTML page.",
    content: `<html>
  <head>
    <title>My First Website</title>
  </head>
  <body>
    <h1>Welcome to My Website!</h1>
    <p>This is my first step into web development.</p>
    <ul>
      <li>About Me</li>
      <li>My Projects</li>
      <li>Contact</li>
    </ul>
  </body>
</html>`,
  },
  {
    id: "photoshop",
    title: "The Photoshop Era",
    description: "Create slices on the design to build your layout.",
    content: "Design mockup with Photoshop layers and slicing tools",
  },
  {
    id: "wordpress",
    title: "WordPress Revolution",
    description: "Choose a theme and see your site transform.",
    content: "WordPress theme selector and customization interface",
  },
  {
    id: "nocode",
    title: "NoCode Evolution",
    description: "Drag components to create your app.",
    content: "Drag-and-drop visual builder interface",
  },
];

export default function NoCodeSection({ onClose }: NoCodeSectionProps) {
  const [activeTab, setActiveTab] = useState("html");
  const activeTabData = tabs.find((tab) => tab.id === activeTab);

  return (
    <div className="full-screen section-bg-nocode relative overflow-hidden">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-20 p-2 rounded-lg bg-white/20 hover:bg-white/30 transition-colors"
      >
        <X className="w-6 h-6 text-white" />
      </button>

      {/* Main Content */}
      <div className="w-full h-full overflow-y-auto py-12 px-4">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-5xl sm:text-6xl font-bold text-white">
              NoCode Development
            </h1>
            <p className="text-lg text-white/90">
              The evolution of web development from HTML to NoCode
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex gap-3 justify-center flex-wrap">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                  activeTab === tab.id
                    ? "bg-white text-blue-600 shadow-lg"
                    : "bg-white/20 text-white hover:bg-white/30"
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          {/* Content */}
          {activeTabData && (
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 space-y-6 border border-white/20">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">
                  {activeTabData.title}
                </h2>
                <p className="text-white/80">{activeTabData.description}</p>
              </div>

              {/* Content Display */}
              {activeTabData.id === "html" && (
                <div className="bg-slate-900 rounded-lg p-6 overflow-x-auto">
                  <pre className="text-green-400 font-mono text-sm">
                    {activeTabData.content}
                  </pre>
                </div>
              )}

              {activeTabData.id === "photoshop" && (
                <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg p-8 space-y-4">
                  <div className="flex gap-4">
                    <div className="w-32 bg-slate-600 rounded p-4 text-white text-sm font-semibold">
                      Layers
                    </div>
                    <div className="flex-1 space-y-3">
                      <div className="h-12 bg-gradient-to-r from-blue-400 to-blue-500 rounded"></div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="h-24 bg-slate-500 rounded"></div>
                        <div className="h-24 bg-slate-500 rounded"></div>
                        <div className="h-24 bg-slate-500 rounded"></div>
                        <div className="h-24 bg-slate-500 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTabData.id === "wordpress" && (
                <div className="space-y-4">
                  <div className="bg-slate-700 rounded-lg p-4 space-y-3">
                    <label className="text-white font-semibold">Theme Selector</label>
                    <select className="w-full px-4 py-2 rounded bg-slate-600 text-white">
                      <option>Classic Blog</option>
                      <option>Business Theme</option>
                      <option>Creative Portfolio</option>
                    </select>
                  </div>
                  <div className="bg-slate-700 rounded-lg p-4 space-y-3">
                    <label className="text-white font-semibold">Header Color</label>
                    <div className="flex gap-3">
                      <input
                        type="color"
                        defaultValue="#EE6C4D"
                        className="w-12 h-10 rounded cursor-pointer"
                      />
                      <input
                        type="text"
                        defaultValue="#EE6C4D"
                        className="flex-1 px-3 py-2 rounded bg-slate-600 text-white"
                      />
                    </div>
                  </div>
                  <button className="w-full px-4 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors">
                    Publish Site
                  </button>
                </div>
              )}

              {activeTabData.id === "nocode" && (
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: "Header Section", color: "bg-pink-400" },
                    { name: "Text Block", color: "bg-blue-400" },
                    { name: "Image Block", color: "bg-orange-400" },
                    { name: "Action Button", color: "bg-green-400" },
                    { name: "Form Builder", color: "bg-red-400" },
                    { name: "Custom Code", color: "bg-purple-400" },
                  ].map((component, idx) => (
                    <div
                      key={idx}
                      className={`${component.color} rounded-lg p-4 cursor-move hover:shadow-lg transition-shadow`}
                    >
                      <p className="text-white font-semibold text-sm">
                        {component.name}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

