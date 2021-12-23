import { MouseEventHandler, ReactNode } from "react";
import { ColorTypes, FontTypes } from "../../assets/types";

export interface FButtonProps {
	children: ReactNode;
	type: "primary" | "secondary" | "outline" | "default";
	onClick: MouseEventHandler<any>;
	align?: "flex-end" | "center" | "flex-start";
	border?: string;
	borderRadius?: string;
	disabled?: boolean;
	fillColor?: ColorTypes;
	flexBox?: boolean;
	flexColumn?: boolean;
	font?: FontTypes;
	fontColor?: ColorTypes;
	fullWidth?: boolean;
	justifyContent?: "center" | "space-between" | "flex-start" | "flex-end";
	padding?: string;
}
