import React, { useState, useEffect, useRef } from "react";
import { FStyledText } from "../text";
import { ColorTypes, FontTypes } from "../../assets/types";
import * as styles from "./styles";
import { FInputFieldProps } from "./types";

export const FInputField = (props: FInputFieldProps) => {
	const [isTriggered, setIsTriggered] = useState<boolean>(false);
	const [isFilled, setIsFilled] = useState<boolean>(false);
	const inputRef = useRef<HTMLInputElement>(null);
	const textareaRef = useRef<HTMLTextAreaElement>(null);

	useEffect(() => { 
		if (textareaRef && textareaRef.current) {
			textareaRef.current.style.height = "0px";
			const scrollHeight = textareaRef.current.scrollHeight;
			textareaRef.current.style.height = scrollHeight + "px";
		}
	}, [props.value]);

	useEffect(() => {
		if (isTriggered && inputRef.current) inputRef.current.focus();
		if (isTriggered && textareaRef.current) textareaRef.current.focus();
	}, [isTriggered]);

	return (
		<div className={styles.FInputFieldContainer(props)}>
			<div
				className={styles.FInputFieldDiv(props, isTriggered, isFilled)}
				onClick={() => {
					if (!props.disabled) setIsTriggered(true);
				}}
				onBlur={() => {
					setIsTriggered(false);
					if (props.value === "") setIsFilled(false);
					else setIsFilled(true);
				}}
			>
				<FStyledText
					font={isTriggered || isFilled ? FontTypes.M12 : FontTypes.M14}
					color={
						isTriggered
							? ColorTypes.BRAND
							: isFilled
							? ColorTypes.BLACK
							: ColorTypes.GREY
					}
				>
					{props.label}
				</FStyledText>
				{props.multiline ? (
					<textarea
						className={styles.FInputFieldInputDiv(
							props,
							isTriggered || isFilled
						)}
						ref={textareaRef}
						maxLength={props.wordcount ? props.wordcount : undefined}
						value={props.value!}
						onChange={(event: any) => {
							props.renderValue(event.target.value);
						}}
					/>
				) : (
					<input
						className={styles.FInputFieldInputDiv(
							props,
							isTriggered || isFilled
						)}
						type="text"
						ref={inputRef}
						maxLength={props.wordcount ? props.wordcount : undefined}
						value={props.value!}
						onChange={(event: any) => props.renderValue(event.target.value)}
					/>
				)}
			</div>
			<FStyledText
				font={FontTypes.R12}
				color={
					isTriggered
						? ColorTypes.BRAND
						: isFilled
						? ColorTypes.BLACK
						: ColorTypes.GREY
				}
				align="right"
			>
				{props.wordcount ? `${props.value!.length}/${props.wordcount}` : ""}
			</FStyledText>
		</div>
	);
};
