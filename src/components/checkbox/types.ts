import { MouseEventHandler } from "react";
import { ColorTypes, SizeTypes } from "../../assets/types";

export interface FCheckboxProps {
	isToggled: boolean;
	size: SizeTypes;
	type: "circle" | "square";
	disabled?: boolean;
	fillColor?: ColorTypes;
	onClick?: MouseEventHandler<any>;
	strokeColor?: ColorTypes;
}
