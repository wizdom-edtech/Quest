import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CiVideoOn as Video } from "react-icons/ci";
import { FaPlay as Play } from "react-icons/fa";
import { ImMagicWand as Wand } from "react-icons/im";
import { HiOutlineSparkles as Sparkles } from "react-icons/hi";
import { Preferences } from "../components/Preferences.tsx";
import { FiLoader as Loader } from "react-icons/fi";

export default function SearchPage() {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [loadingStep, setLoadingStep] = useState("");

  const navigate = useNavigate();

  const generateVideo = () => {
    if (!prompt.trim()) return;

    setIsGenerating(true);

    const steps = [
      "Creating video generation tasks...",
      "Downloading video assets...",
      "Stitching video segments...",
      "Adding audio tracks...",
      "Finalizing video generation...",
    ];

    let currentStep = 0;
    setLoadingStep(steps[currentStep]);

    const simulateStep = () => {
      if (currentStep < steps.length - 1) {
        currentStep++;
        setLoadingStep(steps[currentStep]);
        setTimeout(simulateStep, 1500 + Math.random() * 1500);
      } else {
        setTimeout(() => {
          setIsGenerating(false);
          navigate("/results", { state: { prompt } });
        }, 1000);
      }
    };

    setTimeout(simulateStep, 1500 + Math.random() * 1500);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl mx-auto text-center mb-12">
        <div className="relative mb-16">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -top-16 left-1/4 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl"></div>
          <div className="absolute -top-20 right-1/4 w-48 h-48 bg-pink-500/20 rounded-full blur-2xl"></div>

          <div className="relative">
            <div className="flex items-center justify-center mb-4">
              <div className="flex items-center justify-center space-x-2 bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm">
                <Sparkles className="w-5 h-5 text-purple-300" />
                <span className="text-sm">AI-Powered Video Generation</span>
              </div>
            </div>
            <div className="flex items-center justify-center mb-8">
              <Video className="w-16 h-16 text-purple-500 mr-4" />
              <h1 className="text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 text-transparent bg-clip-text">
                Quest
              </h1>
            </div>
          </div>
        </div>

        <div className="relative mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 blur-xl"></div>
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="What do you want to learn about?"
            className="w-full px-8 py-5 bg-gray-900/50 border-2 border-gray-800 rounded-2xl focus:outline-none focus:border-purple-500 text-lg placeholder-gray-400 backdrop-blur-sm"
          />
          <button
            onClick={generateVideo}
            className="absolute right-3 top-1/2 -translate-y-1/2 px-6 py-3 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-xl hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 flex items-center space-x-3 group"
          >
            <Wand className="w-5 h-5 text-purple-200" />
            <span>Generate</span>
            <Play className="w-5 h-5 text-purple-200 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
      {isGenerating ? (
        <div className="flex flex-col items-center justify-center space-y-6 py-24">
          <div className="animate-spin">
            <Loader className="w-12 h-12 text-purple-500" />
          </div>
          <div className="text-xl font-medium text-purple-400">
            {loadingStep}
          </div>
          <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-purple-500 animate-pulse"
              style={{ width: "60%" }}
            ></div>
          </div>
        </div>
      ) : (
        <Preferences />
      )}
    </div>
  );
}
