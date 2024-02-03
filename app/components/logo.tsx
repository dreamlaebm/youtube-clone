import React from "react";
import Link from "next/link";

import Svg from "../../public/ytb.svg"

export default function Logo() {
    return (
        <a href="/">
            <img src="/ytb.svg" className="w-36 text-white" />
            {/* <Svg /> */}
        </a>
    )
}