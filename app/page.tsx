"use client";

import Image from "next/image";
import HeaderBar from "./components/headerbar";
import { useState } from "react";

import CategoryHolder from "./components/category";
import VideoHolder from "./components/videos";
import ExpandedSidebar from "./components/sidebar/expanded_sidebar";
import SimpleSidebar from "./components/sidebar/simple_sidebar";
import ShortsPage from "./pages/shorts_page";
import VideoPage from "./pages/video_page";

export default function Home() {
  const [isExpanded, setExpanded] = useState(false);
  const [selectedPage, setSelectedPage] = useState(0);

  return (
    <main className="flex flex-col gap-16">
      <HeaderBar is_expanded={isExpanded} setter={setExpanded} />

      <div className="flex gap-1 flex-1">
        {isExpanded ? (
          <ExpandedSidebar
            selectedPage={selectedPage}
            setter={setSelectedPage}
          />
        ) : (
          <SimpleSidebar selectedPage={selectedPage} setter={setSelectedPage} />
        )}
        {selectedPage == 1 ? <ShortsPage /> : <VideoPage />}
      </div>
      <div></div>
    </main>
  );
}
