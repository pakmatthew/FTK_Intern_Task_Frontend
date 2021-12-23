import { ColorTypes, IconTypes, SizeTypes } from "../../assets/types";

export interface FIconProps {
	name: IconTypes;
	size: SizeTypes;
	strokeColor: ColorTypes;
	disabled?: boolean;
	fillColor?: ColorTypes;
}
