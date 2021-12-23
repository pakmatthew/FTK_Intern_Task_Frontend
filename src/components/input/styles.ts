import { style } from "typestyle";
import { ColorTypes, FontTypes } from "../../assets/types";
import { FInputFieldProps } from "./types";

export const FInputFieldContainer = (props: FInputFieldProps) =>
	style({
		backgroundColor: props.fillColor ? props.fillColor : ColorTypes.PUREWHITE,
		display: "flex",
		flexDirection: "column",
		rowGap: props.wordcount ? "0.25rem" : 0,
		width: props.width ? props.width : "100%",
	});

export const FInputFieldDiv = (
	props: FInputFieldProps,
	isTriggered: boolean,
	isFilled: boolean
) =>
	style({
		borderRadius: "0.5rem",
		border:
			"0.1rem solid " +
			(isTriggered
				? ColorTypes.BRAND
				: isFilled
				? ColorTypes.BLACK
				: ColorTypes.LIGHTGREY),
		boxSizing: "border-box",
		caretColor: ColorTypes.BRAND,
		cursor: props.disabled ? "not-allowed" : "text",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		minHeight: props.multiline ? "7rem" : "3.5rem",
		padding: isTriggered || isFilled ? "0.25rem 0.75rem" : "0.75rem",
		transition: "all 0.2s ease-in-out",
	});

export const FInputFieldInputDiv = (props: FInputFieldProps, state: boolean) =>
	style({
		backgroundColor: props.fillColor ? props.fillColor : ColorTypes.PUREWHITE,
		border: "none",
		color: ColorTypes.BLACK,
		display: state ? "block" : "none",
		font: props.multiline ? FontTypes.M16 : FontTypes.M14,
		outline: "none",
		overflow: "hidden",
		padding: 0,
		resize: "none",
		width: "100%",
	});
