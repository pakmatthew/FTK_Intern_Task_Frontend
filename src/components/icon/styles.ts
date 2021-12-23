import { style } from "typestyle";     
import { FIconProps } from "./types";

export const FIconDiv = (props: FIconProps) => style({   
    cursor: props.disabled ? "not-allowed" : "pointer",
    height: props.size === "large" ? "1.5rem" : "1rem", 
    overflow: "visible",
    width: props.size === "large" ? "1.5rem" : "1rem",
    $nest: {
        "&> path":{
            strokeOpacity: props.disabled ? 0.4 : 1
        }
    }
})