import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CiVideoOn as Video } from "react-icons/ci";
import { FaPlay as Play } from "react-icons/fa";
import { EpisodeMetadata } from "../types";
import { getRecommendedVideos, getVideosForPrompt } from "../utils/videoUtils";
import { FiLoader as Loader } from "react-icons/fi";

export default function ResultsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [prompt, setPrompt] = useState(location.state?.prompt || "");
  const [selectedEpisode, setSelectedEpisode] =
    useState<EpisodeMetadata | null>(null);
  const [videos, setVideos] = useState<EpisodeMetadata[]>([]);
  const [recommendedVideos, setRecommendedVideos] = useState<EpisodeMetadata[]>(
    []
  );
  const [isGenerating, setIsGenerating] = useState(false);
  const [loadingStep, setLoadingStep] = useState("");
  const [, setShowContent] = useState(false);

  useEffect(() => {
    if (!location.state?.prompt) {
      navigate("/explore");
      return;
    }
    const newVideos = getVideosForPrompt(location.state?.prompt);
    setVideos(newVideos);
    setRecommendedVideos(getRecommendedVideos(newVideos));
  }, [location.state?.prompt, navigate]);

  const formatViews = (views: number) => {
    if (views >= 1000000) return `${(views / 1000000).toFixed(1)}M views`;
    if (views >= 1000) return `${(views / 1000).toFixed(1)}K views`;
    return `${views} views`;
  };

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
        setTimeout(simulateStep, 1500 + Math.random() * 1500);
      } else {
        setTimeout(() => {
          const newVideos = getVideosForPrompt(prompt);
          setVideos(newVideos);
          setRecommendedVideos(getRecommendedVideos(newVideos));
          setIsGenerating(false);
          setShowContent(true);
        }, 1000);
      }
    };

    setTimeout(simulateStep, 1500 + Math.random() * 1500);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <nav className="bg-gray-900/50 border-b border-gray-800 sticky top-0 z-50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-3 flex items-center space-x-8">
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <Video className="w-6 h-6 text-purple-500" />
            <span className="text-xl font-bold">Quest</span>
          </div>

          <div className="flex-1 max-w-2xl relative">
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500"
              placeholder="Search..."
            />
            <button
              onClick={generateVideo}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-white"
            >
              {/* <Search className="w-4 h-4" /> */}
              Generate
            </button>
          </div>
        </div>
      </nav>

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
        <div className="container mx-auto px-4 py-6 grid grid-cols-12 gap-6">
          <div className="col-span-4 space-y-4">
            <h2 className="text-xl font-semibold mb-4">Episodes</h2>
            <div className="space-y-3">
              {videos.map((episode) => (
                <div
                  key={episode.id}
                  className={`flex space-x-3 bg-gray-900/50 rounded-lg p-3 hover:bg-gray-800/50 transition-colors cursor-pointer ${
                    selectedEpisode?.id === episode.id
                      ? "ring-2 ring-purple-500"
                      : ""
                  }`}
                  onClick={() => setSelectedEpisode(episode)}
                >
                  <img
                    src={episode.thumbnail}
                    alt={episode.title}
                    className="w-32 h-20 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium line-clamp-2">
                      {episode.title}
                    </h3>
                    <div className="text-sm text-gray-400 mt-1">
                      <span>{formatViews(episode.views || 0)}</span>
                      <span className="mx-2">•</span>
                      <span>{episode.duration}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-8 space-y-6">
            <div className="bg-gray-900/50 rounded-lg p-6">
              {selectedEpisode ? (
                <div className="space-y-4">
                  <video
                    controls
                    autoPlay
                    className="w-full rounded-lg bg-black aspect-video"
                    src={selectedEpisode.videoUrl}
                    onEnded={() =>
                      setSelectedEpisode((ep) => {
                        const id = ep?.id;
                        if (id === videos.length) return null;
                        return videos[id ?? +1];
                      })
                    }
                  >
                    Your browser does not support the video tag.
                  </video>
                  <div>
                    <h3 className="text-xl font-medium">
                      {selectedEpisode.title}
                    </h3>
                    <div className="flex items-center text-sm text-gray-400 mt-2">
                      <span>{formatViews(selectedEpisode.views || 0)}</span>
                      <span className="mx-2">•</span>
                      <span>{selectedEpisode.uploadDate}</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center h-96 bg-gray-800/50 rounded-lg">
                  <p className="text-gray-400">Select an episode to play</p>
                </div>
              )}
            </div>

            <div className="bg-gray-900/50 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Recommended</h2>
              <div className="grid grid-cols-3 gap-4">
                {recommendedVideos.map((video) => (
                  <div
                    key={video.id}
                    className="bg-gray-800/50 rounded-lg p-3 hover:bg-gray-700/50 transition-colors cursor-pointer"
                    onClick={() => setSelectedEpisode(video)}
                  >
                    <div className="relative">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-28 object-cover rounded"
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <div className="p-2 bg-purple-500 rounded-full">
                          <Play className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                    <h3 className="font-medium line-clamp-2 mt-2 text-sm">
                      {video.title}
                    </h3>
                    <div className="text-xs text-gray-400 mt-1">
                      <span>{formatViews(video.views || 0)}</span>
                      <span className="mx-1">•</span>
                      <span>{video.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
