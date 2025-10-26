import { X } from "lucide-react";
import { useState } from "react";

interface AISectionProps {
  onClose: () => void;
}

export default function AISection({ onClose }: AISectionProps) {
  const [messages, setMessages] = useState<Array<{ role: string; content: string }>>([
    {
      role: "assistant",
      content:
        "Much like many others in the tech industry, I have been captivated by the promise of AI. Whether it's a bubble waiting to burst or the dawn of a new technological era, there's no denying that AI has already significantly improved many aspects of our lives.",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { role: "user", content: input }]);
      setInput("");
      // Simulate AI response
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content:
              "This is a fake chatbox :) But I'm genuinely excited about AI's potential to solve real-world problems!",
          },
        ]);
      }, 500);
    }
  };

  return (
    <div className="full-screen section-bg-ai relative overflow-hidden">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-20 p-2 rounded-lg bg-white/20 hover:bg-white/30 transition-colors"
      >
        <X className="w-6 h-6 text-white" />
      </button>

      {/* Main Content */}
      <div className="section-container relative z-10 px-4">
        <div className="max-w-2xl w-full h-full flex flex-col space-y-4">
          {/* Header */}
          <div className="text-center space-y-2 pt-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              ✨ CwinhallGPT
            </h1>
            <p className="text-white/80">Tell me about your journey with AI</p>
          </div>

          {/* Chat Container */}
          <div className="flex-1 overflow-y-auto space-y-4 py-6 px-4 bg-white/5 rounded-2xl border border-white/10">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-xs px-4 py-3 rounded-lg ${
                    message.role === "user"
                      ? "bg-cyan-500 text-white"
                      : "bg-white/20 text-white"
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="flex gap-2 pb-8">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleSendMessage();
                }
              }}
              placeholder="Ask me something..."
              className="flex-1 px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/50 border border-white/30 focus:border-white/50 focus:outline-none transition-colors"
            />
            <button
              onClick={handleSendMessage}
              className="px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-white font-semibold transition-colors"
            >
              Send
            </button>
          </div>

          {/* Disclaimer */}
          <p className="text-center text-white/60 text-sm pb-4">
            This is a fake chatbox :) But I'm genuinely excited about AI's potential!
          </p>
        </div>
      </div>
    </div>
  );
}

