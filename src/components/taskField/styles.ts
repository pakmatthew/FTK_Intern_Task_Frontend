import { ColorTypes } from "@fantaskticedtechlimited/fantasktic-comp-library/lib/esm/types";
import { style } from "typestyle";

export const taskDiv = style({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 4,
    border: "2px solid "+ColorTypes.BLACK,
    padding: 8,
    width: 'fit-content'
})
