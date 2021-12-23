import React from "react";
import { ColorTypes } from "../../assets/types";
import * as styles from "./styles";
import { FCheckboxProps } from "./types";

export const FCheckbox = (props: FCheckboxProps) => {
	const handleCheckBox = () => {
		switch (props.type) {
			case "circle":
				return (
					<>
						{props.size === "large" ? (
							props.isToggled ? (
								<>
									<path
										d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
										fill={props.fillColor ? props.fillColor : ColorTypes.BRAND}
									/>
									<path
										d="M17.3896 8L9.3976 16L7 13.6024"
										stroke={
											props.strokeColor
												? props.strokeColor
												: ColorTypes.PUREWHITE
										}
										strokeWidth="1.6"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</>
							) : (
								<>
									<path
										d="M23.4 12C23.4 18.296 18.296 23.4 12 23.4C5.70395 23.4 0.6 18.296 0.6 12C0.6 5.70395 5.70395 0.6 12 0.6C18.296 0.6 23.4 5.70395 23.4 12Z"
										fill={
											props.fillColor ? props.fillColor : ColorTypes.PUREWHITE
										}
										stroke={
											props.strokeColor
												? props.strokeColor
												: ColorTypes.LIGHTGREY
										}
										strokeWidth="1.2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M17.3896 8L9.3976 16L7 13.6024"
										stroke={
											props.strokeColor
												? props.strokeColor
												: ColorTypes.LIGHTGREY
										}
										strokeWidth="1.6"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</>
							)
						) : props.isToggled ? (
							<>
								<path
									d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
									fill={props.fillColor ? props.fillColor : ColorTypes.BRAND}
								/>
								<path
									d="M11.5932 5.3335L6.26515 10.6668L4.66675 9.06843"
									stroke={
										props.strokeColor ? props.strokeColor : ColorTypes.PUREWHITE
									}
									strokeWidth="1.2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</>
						) : (
							<>
								<path
									d="M15.6 8C15.6 12.1974 12.1974 15.6 8 15.6C3.80264 15.6 0.4 12.1974 0.4 8C0.4 3.80264 3.80264 0.4 8 0.4C12.1974 0.4 15.6 3.80264 15.6 8Z"
									fill={
										props.fillColor ? props.fillColor : ColorTypes.PUREWHITE
									}
									stroke={
										props.strokeColor ? props.strokeColor : ColorTypes.LIGHTGREY
									}
									strokeWidth="0.8"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M11.5932 5.3335L6.26515 10.6668L4.66675 9.06843"
									stroke={
										props.strokeColor ? props.strokeColor : ColorTypes.LIGHTGREY
									}
									strokeWidth="1.2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</>
						)}
					</>
				);
			case "square":
				return (
					<>
						{props.size === "large" ? (
							props.isToggled ? (
								<>
									<path
										d="M21.3333 0H2.66667C1.19391 0 0 1.19391 0 2.66667V21.3333C0 22.8061 1.19391 24 2.66667 24H21.3333C22.8061 24 24 22.8061 24 21.3333V2.66667C24 1.19391 22.8061 0 21.3333 0Z"
										fill={props.fillColor ? props.fillColor : ColorTypes.BRAND}
									/>
									<path
										d="M17.3896 8L9.3976 16L7 13.6024"
										stroke={
											props.strokeColor
												? props.strokeColor
												: ColorTypes.PUREWHITE
										}
										strokeWidth="1.6"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</>
							) : (
								<>
									<path
										d="M2.66667 0.6H21.3333C22.4747 0.6 23.4 1.52528 23.4 2.66667V21.3333C23.4 22.4747 22.4747 23.4 21.3333 23.4H2.66667C1.52528 23.4 0.6 22.4747 0.6 21.3333V2.66667C0.6 1.52528 1.52528 0.6 2.66667 0.6Z"
										fill={
											props.fillColor ? props.fillColor : ColorTypes.PUREWHITE
										}
										stroke={
											props.strokeColor
												? props.strokeColor
												: ColorTypes.LIGHTGREY
										}
										strokeWidth="1.2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M17.3896 8L9.3976 16L7 13.6024"
										stroke={
											props.strokeColor
												? props.strokeColor
												: ColorTypes.LIGHTGREY
										}
										strokeWidth="1.6"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</>
							)
						) : props.isToggled ? (
							<>
								<path
									d="M14.2222 0H1.77778C0.795938 0 0 0.795938 0 1.77778V14.2222C0 15.2041 0.795938 16 1.77778 16H14.2222C15.2041 16 16 15.2041 16 14.2222V1.77778C16 0.795938 15.2041 0 14.2222 0Z"
									fill={props.fillColor ? props.fillColor : ColorTypes.BRAND}
								/>
								<path
									d="M11.5932 5.3335L6.26515 10.6668L4.66675 9.06843"
									stroke={
										props.strokeColor ? props.strokeColor : ColorTypes.PUREWHITE
									}
									strokeWidth="1.2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</>
						) : (
							<>
								<path
									d="M1.77778 0.4H14.2222C14.9831 0.4 15.6 1.01685 15.6 1.77778V14.2222C15.6 14.9831 14.9831 15.6 14.2222 15.6H1.77778C1.01685 15.6 0.4 14.9831 0.4 14.2222V1.77778C0.4 1.01685 1.01685 0.4 1.77778 0.4Z"
									fill={
										props.fillColor ? props.fillColor : ColorTypes.PUREWHITE
									}
									stroke={
										props.strokeColor ? props.strokeColor : ColorTypes.LIGHTGREY
									}
									strokeWidth="0.8"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M11.5932 5.3335L6.26515 10.6668L4.66675 9.06843"
									stroke={
										props.strokeColor ? props.strokeColor : ColorTypes.LIGHTGREY
									}
									strokeWidth="1.2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</>
						)}
					</>
				);
			default:
				return <> </>;
		}
	};

	return (
		<svg
			className={styles.FCheckboxDiv(props)}
			onClick={props.disabled ? undefined : props.onClick}
			viewBox={props.size === "large" ? `0 0 24 24` : `0 0 16 16`}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			{handleCheckBox()}
		</svg>
	);
};
