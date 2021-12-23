import { style } from "typestyle";
import { ColorTypes } from "../../assets/types";
import { FStyledTextProps } from "./types";

export const FStyledTextDiv = (props: FStyledTextProps) =>
	style({
		backgroundImage: props.color === ColorTypes.LINEAR ? props.color : "none",
		color: props.color ? props.color : ColorTypes.BLACK,
		font: props.font,
		height: props.height!,
		overflow: "hidden",
		overflowWrap: props.overflowWrap,
		textAlign: props.align ? props.align : "left",
		textDecoration: props.decoration,
		textOverflow: "ellipsis",
		whiteSpace: props.whiteSpace ? props.whiteSpace : "nowrap",
		width: props.width!,
		wordBreak: props.wordBreak,
		display: props.maxRows ? "-webkit-box" : "block",
		"-webkit-background-clip":
			props.color === ColorTypes.LINEAR ? "text" : undefined,
		"-webkit-line-clamp": props.maxRows ? props.maxRows : undefined,
		"-webkit-text-fill-color":
			props.color === ColorTypes.LINEAR ? "transparent" : undefined,
		WebkitBoxOrient: "vertical",
	});
