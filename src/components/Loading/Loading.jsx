import Lottie from "lottie-react";
import loading from "../../lottie/loading.json";

const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-center items-center bg-grayscaleF">
      <Lottie className="w-80 h-80" animationData={loading} />
    </div>
  );
};

export default Loading;
