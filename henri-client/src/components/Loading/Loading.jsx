import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import loder from "../../assets/loader.lottie?url";
const Loading = () => {
  return (
    <div className="flex justify-center fixed top-0 z-50 overflow-hidden items-center w-full h-screen bg-base-100">
      <div className="flex justify-center items-center max-w-2xl  h-screen">
        <div>
          <DotLottieReact
            src={loder}
            loop
            autoplay
          />
        </div>
      </div>
    </div>
  );
};

export default Loading;
