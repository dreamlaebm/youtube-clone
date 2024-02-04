import React, { PropsWithChildren } from "react";

interface SimpleButtonProps extends PropsWithChildren<{}> {
  name: string;
  onClick: () => void;
}

export default function SimpleButton({
  name,
  children,
  onClick,
}: SimpleButtonProps) {
  return (
    <button onClick={onClick}>
      <div className="flex flex-col text-white gap-1 items-center justify-center px-3 py-4 hover:bg-opacity-25 hover:bg-zinc-500 rounded-xl">
        {children}
        <p>{name}</p>
      </div>
    </button>
  );
}
