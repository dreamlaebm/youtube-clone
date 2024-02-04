import { PropsWithChildren } from "react";

interface ShortButtonProps extends PropsWithChildren<{}> {
  name: string;
}

function ShortSideButton({ name, children }: ShortButtonProps) {
  return (
    <div className="flex flex-col gap-1 items-center">
      <div className="rounded-full flex items-center justify-center bg-slate-800 p-3">
        {children}
      </div>
      <p className="text-white text-xs"> {name} </p>
    </div>
  );
}

interface ShortProps {
  title: String;
  publisher: String;
  likes: number;
  publisherPicture: string;
  thumbnail: string;
}

export function Short({
  title,
  publisher,
  likes,
  publisherPicture,
  thumbnail,
}: ShortProps) {
  return (
    <div className="flex flex-1 gap-2">
      <div
        className="relative flex gap-2 flex-1"
        style={{
          height: "80vh",
        }}
      >
        <img src={thumbnail} alt="" className="rounded-md" />
        <div className="absolute bottom-0 left-0">
          <div className="flex flex-col p-4">
            <div className="flex items-center gap-2">
              <img
                src={publisherPicture}
                className="w-[48px] h-[48px] rounded-full"
                alt=""
              />
              <p className="text-white font-medium">{publisher}</p>
            </div>
            <h2 className="text-white">{title}</h2>
          </div>
        </div>
      </div>
      <ul className="flex flex-col justify-end mb-4">
        <li>
          <ShortSideButton name={`${likes}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              viewBox="0 0 24 24"
              width="16"
              fill="white"
              focusable="false"
            >
              <path d="M8 21V9.282c0-.834.26-1.647.745-2.325L13 1l.551.331c1.153.691 1.705 2.065 1.351 3.362L14 8h5.192c.827 0 1.609.376 2.125 1.022.711.888.795 2.125.209 3.101L21 13l.165.413c.519 1.296.324 2.769-.514 3.885l-.151.202v.5c0 1.657-1.343 3-3 3H8ZM4.5 9C3.672 9 3 9.672 3 10.5v9c0 .828.672 1.5 1.5 1.5H7V9H4.5Z"></path>
            </svg>
          </ShortSideButton>
        </li>
      </ul>
    </div>
  );
}

export default function ShortsHolder() {
  return (
    <>
      <div className="aspect-[9/16] flex-1">
        <Short
          title={"Test Short Video for you!"}
          publisher={"Dream Leabm"}
          likes={420}
          publisherPicture={"https://github.com/dreamlaebm.png"}
          thumbnail={
            "https://e0.pxfuel.com/wallpapers/812/992/desktop-wallpaper-web-developer-web-development.jpg"
          }
        />
      </div>
    </>
  );
}
