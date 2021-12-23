import { style } from "typestyle";
import { ColorTypes, FontTypes } from "../../assets/types";
import { FButtonProps } from "./types";

export const FButtonDiv = (props: FButtonProps) =>
	style({
		alignItems: "center",
		alignSelf: props.align ? props.align : "flex-start",
		backgroundColor: props.fillColor
			? props.fillColor
			: props.type === "primary"
			? ColorTypes.BRAND
			: props.type === "secondary"
			? ColorTypes.PURPLE_BG
			: ColorTypes.PUREWHITE,
		border: props.border
			? props.border
			: props.type === "outline"
			? "0.125rem solid" + ColorTypes.BLACK
			: "none",
		borderRadius: props.borderRadius ? props.borderRadius : "0.25rem",
		boxSizing: "border-box",
		color: props.fontColor
			? props.fontColor
			: props.type === "primary"
			? ColorTypes.PUREWHITE
			: props.type === "secondary"
			? ColorTypes.BRAND
			: ColorTypes.BLACK,
		columnGap: "0.5rem",
		cursor: props.disabled ? "not-allowed" : "pointer",
		display: props.flexBox ? "flex" : "block",
		flexDirection: props.flexColumn ? "column" : "row",
		font: props.font ? props.font : FontTypes.M12,
		justifyContent: props.justifyContent
			? props.justifyContent
			: "space-between",
		opacity: props.disabled ? 0.4 : 1,
		padding: props.padding ? props.padding : "0.75rem 1rem",
		width: props.fullWidth ? "100%" : "fit-content",
	});
