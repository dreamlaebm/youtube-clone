"use client";

import React, { PropsWithChildren, useState } from "react";
import HomeButton from "../button/complex/HomeButton";
import YoutubeMusic from "../button/complex/YtbMusic";
import YourChannelButton from "../button/complex/your_channel";
import { SidebarProps } from "../utils/sidebar_shared";
import Shorts from "../button/complex/shorts";
import Subscriptions from "../button/complex/subscriptions";
import You from "../button/complex/you";
import History from "../button/complex/history";

interface SidebarComponentProps extends PropsWithChildren<{}> {
  // You can add additional props here if needed
}

interface SidebarObjectProps extends PropsWithChildren<{}> {
  // You can add additional props here if needed
  active?: boolean;
  onClick: () => void;
}

const SidebarComponent: React.FC<SidebarComponentProps> = ({ children }) => {
  return <div className="flex flex-col gap-2 py-4">{children}</div>;
};

const SidebarObject = ({ children, active, onClick }: SidebarObjectProps) => {
  return (
    <button
      onClick={onClick}
      className={`${
        active ? "bg-zinc-500 bg-opacity-25" : ""
      } hover:bg-zinc-500 hover:bg-opacity-25 rounded-xl flex gap-4 pl-2 pr-20 py-2`}
    >
      {children}
    </button>
  );
};

export default function ExpandedSidebar({
  selectedPage,
  setter,
}: SidebarProps) {
  return (
    <div className={`flex flex-col divide-y sticky p-2`}>
      <SidebarComponent>
        <SidebarObject active={0 == selectedPage} onClick={() => setter(0)}>
          <HomeButton />
        </SidebarObject>
        <SidebarObject active={1 == selectedPage} onClick={() => setter(1)}>
          <Shorts />
        </SidebarObject>
        <SidebarObject active={2 == selectedPage} onClick={() => setter(2)}>
          <Subscriptions />
        </SidebarObject>
      </SidebarComponent>

      <SidebarComponent>
        <SidebarObject active={3 == selectedPage} onClick={() => setter(3)}>
          <You />
        </SidebarObject>
        <SidebarObject active={4 == selectedPage} onClick={() => setter(4)}>
          <History />
        </SidebarObject>
      </SidebarComponent>
    </div>
  );
}
