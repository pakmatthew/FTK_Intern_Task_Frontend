import { 
    ColorTypes, 
    FontTypes,
    Nullable,  
} from "../../assets/types"  

export interface FStyledTextProps { 
    children: Nullable<string> | JSX.Element,
    font: FontTypes,
    align?: "center" | "left" | "right",
    color?: ColorTypes,
    decoration?: "line-through" | "none" | "underline", 
    height?: string,
    maxRows?: number,
    overflowWrap?: "break-word" | "normal",
    whiteSpace?: "normal" | "nowrap" | "pre-wrap",
    width?: string,
    wordBreak?: "break-all" | "break-word" | "normal"
}