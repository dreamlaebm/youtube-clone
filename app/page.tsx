"use client";

import Image from "next/image";
import HeaderBar from "./components/headerbar";
import { useState } from "react";

export default function Home() {
  const [isExpanded, setExpanded] = useState(false)
  
  
  return (
      <main>
        <HeaderBar />

        {
          isExpanded ? 
            <ExpandedSidebar />
          : <SimpleSidebar />
        }

        <div>
          
        </div>
      </main>
  );
}
