import { ColorTypes } from "../../assets/types";
import { style } from "typestyle";

export const taskDiv = style({
    display: 'flex',
    flexDirection: 'row',
    columnGap: 8,
    alignItems: 'center',
    borderRadius: 4,
    border: "2px solid "+ColorTypes.BLACK,
    padding: 8,
    width: 'fit-content'
})
