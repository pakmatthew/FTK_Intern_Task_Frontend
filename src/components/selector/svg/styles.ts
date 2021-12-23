import { style } from "typestyle";

export const selectorArrowDiv = (isClicked: boolean) => style({
    cursor: "pointer",
    height: "1rem",
    transform: isClicked ? "rotate(180deg)" : undefined,
    transition: "all 0.2s ease-in-out",
    width: "1rem"
})