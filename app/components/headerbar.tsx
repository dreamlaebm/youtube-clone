import React, { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import Logo from "./logo";

// import SearchImage from '../../public/search.svg'

export default function HeaderBar({
  is_expanded,
  setter,
}: {
  is_expanded: boolean;
  setter: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <>
      <div className="h-8 w-full">
        <div className="flex justify-between md:gap-40 xl:gap-52 p-4 my-4 items-center h-full w-full">
          <div className="grow-1 flex">
            <button
              onClick={() => {
                setter(!is_expanded);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>

            <Logo />
          </div>
          <div className="grow-[2] max-w-[670px]">
            <div className="h-full w-full flex gap-0">
              <input
                placeholder="Search"
                className="rounded-l-full bg-stone-900 center p-2 pl-4 basis-5/6 text-white outline-none max-w-[650px]"
              ></input>

              <div className="flex items-center rounded-r-full justify-center basis-1/6 pl-6 pr-4 bg-neutral-800 max-w-20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="grow-1">
            <img
              src="https://www.infoescola.com/wp-content/uploads/2012/11/tio-sam.jpg"
              className="w-8 h-8 rounded-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}
