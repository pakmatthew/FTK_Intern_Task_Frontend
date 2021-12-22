import { ReactNode } from "react";


export interface PopupProps {
    title: string,
    children: ReactNode,
    renderOpenPopup: (isOpen: boolean) => void
}