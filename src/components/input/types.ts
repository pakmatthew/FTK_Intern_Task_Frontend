import { ColorTypes, Nullable } from "../../assets/types";

export interface FInputFieldProps {
	value: Nullable<string>;
	label: string;
	renderValue: (v: string) => void;
	disabled?: boolean;
	fillColor?: ColorTypes;
	multiline?: boolean; //for long inputfield / textarea
	width?: string;
	wordcount?: number;
}
