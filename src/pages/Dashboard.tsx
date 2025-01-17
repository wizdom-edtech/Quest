import { useState } from "react";
import { Link } from "react-router-dom";
import { CiVideoOn as Video } from "react-icons/ci";
import { IoHomeOutline as Home } from "react-icons/io5";
import { FaPlay as Play } from "react-icons/fa";
import { ImMagicWand as Wand } from "react-icons/im";
import { FiLoader as Loader } from "react-icons/fi";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

const fadeIn = (
  direction: string,
  type: string,
  delay: number,
  duration: number
) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

interface EpisodeMetadata {
  id: number;
  title: string;
  duration: string;
  thumbnail: string;
  videoUrl: string;
}

const Dashboard = () => {
  const [prompt, setPrompt] = useState("");
  const [selectedEpisode, setSelectedEpisode] =
    useState<EpisodeMetadata | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [loadingStep, setLoadingStep] = useState("");
  const [showContent, setShowContent] = useState(false);

  const episodes = [
    {
      id: 1,
      title: "The Struggle Begins",
      duration: "15:00",
      thumbnail: "thumbnail_ep_1.png",
      videoUrl: "dandi_ep_1.mp4",
    },
    {
      id: 2,
      title: "The Journey To Dandi",
      duration: "15:00",
      thumbnail: "thumbnail_ep_2.png",
      videoUrl: "dandi_ep_2.mp4",
    },
    {
      id: 3,
      title: "Breaking The Salt Law",
      duration: "10:00",
      thumbnail: "thumbnail_ep_3.png",
      videoUrl: "dandi_ep_3.mp4",
    },
    {
      id: 4,
      title: "The Crackdown and Global Impact",
      duration: "25:00",
      thumbnail: "thumbnail_ep_4.png",
      videoUrl: "dandi_ep_4.mp4",
    },
    {
      id: 5,
      title: "Unity And Legacy",
      duration: "45:00",
      thumbnail: "thumbnail_ep_5.png",
      videoUrl: "dandi_ep_5.mp4",
    },
  ];

  const generateVideo = () => {
    if (!prompt.trim()) return;

    setIsGenerating(true);
    setShowContent(false);
    setSelectedEpisode(null);

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
        setTimeout(simulateStep, Math.random() * 1500 + 1500);
      } else {
        setTimeout(() => {
          setIsGenerating(false);
          setShowContent(true);
        }, 1000);
      }
    };

    setTimeout(simulateStep, Math.random() * 1500 + 1500);
  };

  return (
    <div className="min-h-screen bg-primary text-white">
      <nav className="bg-secondary border-b border-gray-700">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Video className="w-6 h-6 text-purple-500" />
            <span className="text-xl font-bold">Quest</span>
          </div>
          <Link
            to="/"
            className="flex items-center space-x-2 hover:text-purple-400 transition-colors"
          >
            <Home className="w-5 h-5" />
            <span>Home</span>
          </Link>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="bg-secondary p-6 rounded-lg">
            <label htmlFor="prompt" className="block text-sm font-medium mb-2">
              Enter your video generation prompt
            </label>
            <div className="flex space-x-4">
              <input
                type="text"
                id="prompt"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="flex-1 bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Describe the video you want to generate..."
                disabled={isGenerating}
              />
              <button
                className={`px-6 py-2 bg-purple-600 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-xl hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-purple-500/25`}
                onClick={generateVideo}
                disabled={isGenerating}
              >
                Generate
              </button>
            </div>
          </div>
        </div>

        {!isGenerating && !showContent ? (
          <div className="flex items-center justify-center space-y-6 py-24">
            <div className="bg-secondary rounded-lg p-6 m-5 flex flex-col gap-4 justify-center items-center shadow-lg">
              <motion.div
                variants={fadeIn("up", "spring", 0.5, 0.75)}
                className="w-full max-w-sm"
              >
                <Tilt
                  options={{
                    max: 60,
                    scale: 1.1,
                    speed: 450,
                  }}
                  className="bg-gradient-to-br from-gray-700 to-gray-600 p-6 rounded-2xl shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <div className="relative w-28 h-28 mx-auto">
                    <img
                      src="growth.png"
                      alt="Select Age Icon"
                      className="object-cover rounded-xl shadow-md"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="text-white font-bold text-2xl">
                      Select Age
                    </h3>
                  </div>
                </Tilt>
              </motion.div>
              <motion.div
                variants={fadeIn("up", "spring", 0.5, 0.75)}
                className="w-full max-w-sm"
              >
                <Tilt
                  options={{
                    max: 75,
                    scale: 1.1,
                    speed: 450,
                  }}
                  className="bg-gradient-to-br from-gray-700 to-gray-600 p-6 rounded-2xl shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <div className="relative w-28 h-28 mx-auto">
                    <img
                      src="comedy.png"
                      alt="Select Age Icon"
                      className="object-cover rounded-xl shadow-md"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="text-white font-bold text-2xl">
                      Select Genre
                    </h3>
                  </div>
                </Tilt>
              </motion.div>
            </div>
            <div className="bg-secondary p-8 rounded-lg text-center max-w-2xl">
              <Wand className="w-16 h-16 text-purple-500 mx-auto mb-6" />
              <h2 className="text-2xl font-bold mb-4">
                Ready to Generate Your Video
              </h2>
              <p className="text-gray-400 mb-6">
                Enter a prompt above to start generating amazing videos using
                our AI technology. Be descriptive and creative with your prompt
                for the best results!
              </p>
              <div className="flex justify-center space-x-4">
                <div className="bg-gray-700 p-4 rounded-lg">
                  <p className="text-sm text-gray-400">Example prompt:</p>
                  <p className="text-purple-400">
                    "Create a nature documentary about rainforests"
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-secondary rounded-lg p-6 m-5 flex flex-col gap-4 justify-center items-center shadow-lg">
              <motion.div
                variants={fadeIn("up", "spring", 0.5, 0.75)}
                className="w-full max-w-sm"
              >
                <Tilt
                  options={{
                    max: 75,
                    scale: 1.1,
                    speed: 450,
                  }}
                  className="bg-gradient-to-br from-gray-700 to-gray-600 p-6 rounded-2xl shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <div className="relative w-28 h-28 mx-auto">
                    <img
                      src="author.png"
                      alt="Select Age Icon"
                      className="object-cover rounded-xl shadow-md"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="text-white font-bold text-2xl">
                      Select Narration Type
                    </h3>
                  </div>
                </Tilt>
              </motion.div>
              <motion.div
                variants={fadeIn("up", "spring", 0.5, 0.75)}
                className="w-full max-w-sm"
              >
                <Tilt
                  options={{
                    max: 75,
                    scale: 1.1,
                    speed: 450,
                  }}
                  className="bg-gradient-to-br from-gray-700 to-gray-600 p-6 rounded-2xl shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <div className="relative w-28 h-28 mx-auto">
                    <img
                      src="bubble-chat.png"
                      alt="Select Age Icon"
                      className="object-cover rounded-xl shadow-md"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="text-white font-bold text-2xl">
                      Favourite Topics
                    </h3>
                  </div>
                </Tilt>
              </motion.div>
            </div>
          </div>
        ) : isGenerating ? (
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
        ) : showContent ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-secondary rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Generated Episodes</h2>
              <div className="space-y-4">
                {episodes.map((episode) => (
                  <div
                    key={episode.id}
                    className={`flex space-x-4 bg-gray-700 rounded-lg p-3 hover:bg-gray-600 transition-colors cursor-pointer ${
                      selectedEpisode?.id === episode.id
                        ? "ring-2 ring-purple-500"
                        : ""
                    }`}
                    onClick={() => setSelectedEpisode(episode)}
                  >
                    <img
                      src={episode.thumbnail}
                      alt={episode.title}
                      className="w-24 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium">{episode.title}</h3>
                      <p className="text-sm text-gray-400">
                        {episode.duration}
                      </p>
                    </div>
                    <div className="p-2 hover:bg-gray-500 rounded-full transition-colors">
                      <Play className="w-5 h-5" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-secondary rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Video Player</h2>
              {selectedEpisode ? (
                <div className="space-y-4">
                  <video
                    controls
                    className="w-full rounded-lg bg-black"
                    src={selectedEpisode.videoUrl}
                  >
                    Your browser does not support the video tag.
                  </video>
                  <div>
                    <h3 className="text-lg font-medium">
                      {selectedEpisode.title}
                    </h3>
                    <p className="text-sm text-gray-400">
                      Duration: {selectedEpisode.duration}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center h-64 bg-gray-700 rounded-lg">
                  <p className="text-gray-400">Select an episode to play</p>
                </div>
              )}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Dashboard;
