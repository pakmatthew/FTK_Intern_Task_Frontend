import React from "react";
import { ColorTypes } from "../../../assets/types";
import * as styles from "./styles"

export const selectorArrow = (isClicked: boolean) => {
    return(
        <svg className={styles.selectorArrowDiv(isClicked)}
            viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M4 6L8 10L12 6" 
                stroke={isClicked ? ColorTypes.BRAND : ColorTypes.HARDSTROKE} 
                strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"
            />
        </svg>
    )
}