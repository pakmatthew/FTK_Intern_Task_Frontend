import React from "react";
import { style } from "typestyle";     
import { ColorTypes } from "../../assets/types";
import { FSelectorProps } from "./types";

export const FSelectorContentContainer = (props: FSelectorProps) => style({
    display: "flex",
    flexDirection: "column",
    width: props.width ? props.width : "100%",
    height: props.height ? props.height : "3.5rem"
})

export const FSelectorDiv = (
    props: FSelectorProps,
    isClicked: boolean
) => style({
    alignItems: "center",
    border: props.border ? props.border :
        "0.1rem solid "+(isClicked ?
            ColorTypes.BRAND : ColorTypes.HARDSTROKE
        ),
    borderRadius: props.borderRadius ? props.borderRadius : "0.5rem",
    boxSizing: "border-box",
    columnGap: "0.5rem",
    cursor: props.disabled ? "not-allowed" : "pointer",
    display: "flex",
    flexDirection: "row",
    height: "inherit",
    justifyContent: "space-between",
    padding: props.padding ? props.padding : "0.75rem",
    width: "inherit" 
})

export const FSelectorContentDiv = (props: FSelectorProps) => style({
    display: "flex",
    flexDirection: props.selectedOption ? "column" : "row",
    rowGap: props.selectedOption ? "0.25rem" : 0,
    width: "100%"
})

export const FSelectorDropdownDiv = ( 
    ref: React.RefObject<HTMLDivElement>,
    isClicked: boolean
) => style({ 
    position: "absolute",
    width: ref.current ? ref.current.offsetWidth : 0,  
    marginTop: isClicked && ref.current ? 
        ref.current.offsetHeight + 12 : 
        !isClicked && ref.current ? ref.current.offsetHeight : 0,
    visibility: isClicked && ref.current ? "visible" : "hidden",
    transition: "all 0.2s ease-in-out"  
})
