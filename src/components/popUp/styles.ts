import { ColorTypes } from "@fantaskticedtechlimited/fantasktic-comp-library/lib/esm/types";
import { style } from "typestyle";

export const PopupContainer = (
    screenWidth: number,
    screenHeight: number
) => style({
    display: 'flex',
    flexDirection: "column",
    rowGap: 12,
    border: "2px solid "+ ColorTypes.BLACK,
    borderRadius: 8,
    padding: 16,
    width: screenWidth * 0.35,
    backgroundColor: ColorTypes.PUREWHITE,
    position: 'absolute',
    top: 0,
    alignSelf: 'center',
    marginTop: screenHeight * 0.25
})
