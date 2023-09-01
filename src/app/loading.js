import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Loading = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center fixed">
      <p className="text-center text-3xl font-bold text-hackathon-blue-100">
        Loading...
      </p>
      <AiOutlineLoading3Quarters className="animate-spin text-hackathon-blue-100" />
    </div>
  );
};

export default Loading;
