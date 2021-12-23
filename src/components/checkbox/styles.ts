import { style } from "typestyle";    
import { FCheckboxProps } from "./types";

export const FCheckboxDiv = (props: FCheckboxProps) => style({  
    cursor: props.disabled ? "not-allowed" : "pointer",
    height: props.size === "large" ? "1.5rem" : "1rem", 
    opacity: props.disabled ? 0.4 : 1, 
    overflow: "visible",
    width: props.size === "large" ? "1.5rem" : "1rem",
})