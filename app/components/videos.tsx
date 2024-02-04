import { PropsWithChildren } from "react";

interface VideoProps {
  title: String;
  views: number;
  publisher: String;
  publisherPicture: string;
  thumbnail: string;
}

export function Video({
  title,
  views,
  publisher,
  publisherPicture,
  thumbnail,
}: VideoProps) {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <img
          src={thumbnail}
          alt=""
          className="rounded-md aspect-video w-4/9 xl:w-2/9"
        />
      </div>
      <div className="flex gap-2">
        <img
          src={publisherPicture}
          className="w-[48px] h-[48px] rounded-full"
          alt=""
        />
        <div className="flex-col flex">
          <h2 className="p-2">{title}</h2>

          <ul className="flex gap-2">
            <li>{publisher}</li>
            <li>{views} views</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function VideoHolder() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
        {[...Array(12)].map((x, i) => (
          <Video
            title={"Test video for you"}
            views={69420}
            publisher={"Dream Leabm"}
            publisherPicture={"https://github.com/dreamlaebm.png"}
            thumbnail={"https://github.com/dreamlaebm.png"}
          />
        ))}
      </div>
    </>
  );
}
