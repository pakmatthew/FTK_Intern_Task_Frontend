import { MouseEventHandler, FunctionComponentElement } from "react";
import { ColorTypes, SizeTypes } from "../../assets/types";

export interface FSVGButtonProps {
	children: FunctionComponentElement<"svg">;
	size: SizeTypes;
	align?: "flex-start" | "center" | "flex-end";
	border?: string;
	borderRadius?: string;
	disabled?: boolean;
	fillColor?: ColorTypes;
	onClick?: MouseEventHandler<any>;
	padding?: string;
}
