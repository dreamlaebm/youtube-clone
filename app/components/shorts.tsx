import { PropsWithChildren } from "react";

interface ShortButtonProps extends PropsWithChildren<{}> {
  name: string;
}

function ShortSideButton({ name, children }: ShortButtonProps) {
  return (
    <button>
      <div className="flex flex-col gap-1 items-center">
        <div className="rounded-full flex items-center justify-center bg-slate-800 p-3">
          {children}
        </div>
        <p className="text-white text-xs"> {name} </p>
      </div>
    </button>
  );
}

interface ShortProps {
  title: String;
  publisher: String;
  likes: number;
  comments: number;
  publisherPicture: string;
  thumbnail: string;
}

export function Short({
  title,
  publisher,
  likes,
  comments,
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
      <ul className="flex flex-col justify-end mb-4 gap-2">
        <li>
          <ShortSideButton name={`${likes}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              fill="white"
              focusable="false"
            >
              <path d="M8 21V9.282c0-.834.26-1.647.745-2.325L13 1l.551.331c1.153.691 1.705 2.065 1.351 3.362L14 8h5.192c.827 0 1.609.376 2.125 1.022.711.888.795 2.125.209 3.101L21 13l.165.413c.519 1.296.324 2.769-.514 3.885l-.151.202v.5c0 1.657-1.343 3-3 3H8ZM4.5 9C3.672 9 3 9.672 3 10.5v9c0 .828.672 1.5 1.5 1.5H7V9H4.5Z"></path>
            </svg>
          </ShortSideButton>
        </li>
        <li>
          <ShortSideButton name="dislike">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              fill="white"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
            >
              <path d="M16 3v11.718c0 .834-.26 1.647-.745 2.325L11 23l-.551-.331c-1.153-.691-1.705-2.065-1.351-3.362L10 16H4.808c-.827 0-1.609-.376-2.125-1.022-.711-.888-.795-2.125-.209-3.101L3 11l-.165-.413c-.519-1.296-.324-2.769.514-3.885L3.5 6.5V6c0-1.657 1.343-3 3-3H16Zm3 12c1.105 0 2-.895 2-2V5c0-1.105-.895-2-2-2h-2v12h2Z"></path>
            </svg>
          </ShortSideButton>
        </li>
        <li>
          <ShortSideButton name={`${comments}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              fill="white"
              focusable="false"
            >
              <path
                clip-rule="evenodd"
                d="M21 5c0-1.105-.895-2-2-2H5c-1.105 0-2 .895-2 2v12c0 1.105.895 2 2 2h12l3.146 3.146c.315.315.854.092.854-.353V5ZM7 9c0-.552.448-1 1-1h8c.552 0 1 .448 1 1s-.448 1-1 1H8c-.552 0-1-.448-1-1Zm1 3c-.552 0-1 .448-1 1s.448 1 1 1h5c.552 0 1-.448 1-1s-.448-1-1-1H8Z"
                fill-rule="evenodd"
              ></path>
            </svg>
          </ShortSideButton>
        </li>
        <li>
          <ShortSideButton name="Share">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
              fill="white"
            >
              <path d="m13.202 3.368 9.438 7.865c.48.4.48 1.137 0 1.537l-9.438 7.865c-.652.543-1.64.08-1.64-.768V16H9.957c-2.778 0-5.406 1.263-7.141 3.432-.304.38-.912.086-.803-.388l1.118-4.843C3.968 10.572 7.2 8 10.926 8h.636V4.137c0-.848.989-1.311 1.64-.769Z"></path>
            </svg>
          </ShortSideButton>
        </li>
        <li>
          <ShortSideButton name="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
              fill="white"
            >
              <path d="M12 16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM10.5 12c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm0-6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5z"></path>
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
      <div className="aspect-[9/16] md:p-0 p-4 flex-1">
        <Short
          title={"Test Short Video for you!"}
          publisher={"Dream Leabm"}
          likes={420}
          comments={23}
          publisherPicture={"https://github.com/dreamlaebm.png"}
          thumbnail={
            "https://e0.pxfuel.com/wallpapers/812/992/desktop-wallpaper-web-developer-web-development.jpg"
          }
        />
      </div>
    </>
  );
}
