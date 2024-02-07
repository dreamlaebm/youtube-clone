import CategoryHolder from "../components/category";
import VideoHolder from "../components/videos";

export default function VideoPage() {
  return (
    <div className="text-white pl-5 flex flex-col gap-8 flex-1">
      <div className="flex gap-4">
        <CategoryHolder />
      </div>
      <div className="w-full mr-4 pr-4">
        <VideoHolder />
      </div>
    </div>
  );
}
