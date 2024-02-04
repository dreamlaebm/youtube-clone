import { Dispatch, SetStateAction } from "react";

export interface SidebarProps {
    selectedPage: number,
    setter: Dispatch<SetStateAction<number>>,
}