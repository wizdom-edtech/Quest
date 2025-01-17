import { useNavigate } from "react-router-dom";
import { ImMagicWand as Wand } from "react-icons/im";
import { HiOutlineSparkles as Sparkles } from "react-icons/hi";
import { IoPlayOutline as Play } from "react-icons/io5";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-primary w-full h-screen flex flex-col justify-center items-center">
      <div className="relative w-[1400px] h-full">
        <div className="text-center items-center justify-center w-[530px] h-[302px] absolute top-[-9px]">
          <img src="web2.png" className="object-contain" />
        </div>

        <div className="relative top-[120px] w-full h-[500px] flex justify-center">
          <div className="absolute flex items-center justify-center">
            <div className="flex items-center justify-center space-x-2 bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm">
              <Sparkles className="w-5 h-5 text-purple-300" />
              <span className="text-sm text-white">
                AI-Powered Video Generation
              </span>
            </div>
          </div>

          <div className="flex">
            <div className="w-[275px] h-[300px] absolute left-[90px] flex justify-center items-center">
              <div className="relative">
                <div>
                  <img src="moon.svg" alt="" className="w-[275px] h-[300px]" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h1 className="font-rubik text-[8rem] absolute left-[60px] flex items-center text-[#7d8dff] drop-shadow-[0_0_20px_#7d8dff]">
                    Quest
                  </h1>
                  <img
                    src="sparkle.svg"
                    alt=""
                    className="absolute left-[32rem] drop-shadow-[0_0_20px_#f89a51]"
                  />
                  <h1 className="font-dancingScript text-6xl absolute w-[31rem] left-[18rem] bottom-8 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 text-transparent bg-clip-text leading-tight p-2">
                    Let the stories unfold
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className="flex">
            <img
              src="water2.gif"
              alt=""
              className="absolute right-[-3rem] w-[324px] h-[473px] transform rotate-180"
            />
            <img
              src="water.gif"
              alt=""
              className="absolute right-[5rem] w-[278px] h-[421px] top-[10rem]"
            />
          </div>
        </div>

        <div className="relative flex justify-center space-x-6 mt-5">
        <button
          onClick={() => navigate("/dashboard")}
          className="flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-xl hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
        >
          <Wand className="w-5 h-5 text-purple-300" />
          <span>Start Creating</span>
          <Play className="w-5 h-5 text-purple-300" />
        </button>
      </div>


        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative p-8 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-colors">
              <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
                Easy to Use
              </h3>
              <p className="text-gray-300">
                Simple interface designed for both beginners and professionals. No technical expertise required.
              </p>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative p-8 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-colors">
              <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
                AI Powered
              </h3>
              <p className="text-gray-300">
                Advanced AI technology generates high-quality videos tailored to your specific needs.
              </p>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative p-8 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-colors">
              <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
                Quick Results
              </h3>
              <p className="text-gray-300">
                Get your professionally crafted videos in minutes. Save time without compromising quality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
