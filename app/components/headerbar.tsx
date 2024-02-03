import React from "react";
import Link from "next/link";
import Logo from "./logo"

// import SearchImage from '../../public/search.svg'

export default function HeaderBar() {
    return (
        <>
            <div className="flex justify-between p-4 items-center w-full">
                <div className="basis-2/7">
                    <Logo />
                </div>
                <div className="basis-3/7">
                    <div className="w-36 rounded-xl flex bg-stone-900">
                        <input placeholder="Search" className="rounded bg-stone-900 center p-2 mx-2">
                        </input>

                        <div className="basis-3 bg-gray-500">
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="w-full h-20 bg-emerald-800 sticky top-0">
                    <div className="flex justify-between h-full">
                        <div>
                            <Logo />
                        </div>

                        <div className="basis-3/7">
                            <div className="w-36 rounded-xl flex bg-stone-900">
                                <input placeholder="Search" className="rounded bg-stone-900 center p-2 mx-2">
                                </input>
                                
                                <div className="basis-3 bg-gray-500">
                                </div>
                            </div>
                        </div>
                        <div></div>
                    </div>
            </div> */}
        </>
    )
}