import { useRouter } from "next/router";
import { ArrowLeftIcon } from "@heroicons/react/solid";

const FloatingBackButton = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div
      onClick={handleBack}
      className="absolute top-6 left-6 m-1 p-3 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer"
    >
      <ArrowLeftIcon className="h-7 w-7 pr-1 text-gray-600" />
    </div>
  );
};

export default FloatingBackButton;
