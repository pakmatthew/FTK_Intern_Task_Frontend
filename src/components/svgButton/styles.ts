import { style } from "typestyle";     
import { FSVGButtonProps } from "./types";

export const FSVGButtonDiv = (props: FSVGButtonProps) => style({ 
    alignSelf: props.align,
    backgroundColor: props.fillColor ? props.fillColor : "transparent",
    border: props.border ? props.border : "none", 
    borderRadius: props.borderRadius ? props.borderRadius : "0.5rem",   
    cursor: props.disabled ? "not-allowed" : "pointer",
    height: props.size === "large" ? "1.5rem" : "1rem", 
    opacity: props.disabled ? 0.4 : 1,
    padding: props.padding ? props.padding : 0, 
    width: props.size === "large" ? "1.5rem" : "1rem",
})