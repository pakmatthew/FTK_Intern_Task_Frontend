import { ReactNode } from "react";
import { ColorTypes } from "../../assets/types";


export interface FSelectorProps {
    children: ReactNode,
    label: string,
    placeholder: string,
    selectedOption: string, 
    border?: string,
    borderRadius?: string,
    disabled?: boolean,
    fillColor?: ColorTypes,
    height?: string,
    padding?: string,
    width?: string
}