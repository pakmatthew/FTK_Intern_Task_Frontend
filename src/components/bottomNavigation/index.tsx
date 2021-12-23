import { FBottomNavigationProps } from "./types";
import * as styles from "./styles";
import React from "react";
import { FButton } from "..";
import { ColorTypes } from "../../assets/types";

export const FBottomNavigation = (props: FBottomNavigationProps) => {
	return (
		<div className={styles.FBottomNavigationDiv}>
			<FButton
				type="default"
				fontColor={ColorTypes.GREY}
				fillColor={props.leadingButtonColor}
				padding="0.5rem 0.75rem"
				onClick={props.onLeadingButtonClick}
			>
				{props.leadingButtonName}
			</FButton>
			<FButton
				align="flex-end"
				type="primary"
				fillColor={props.actionButtonColor}
				disabled={props.disableActionButton}
				padding="0.5rem 0.75rem"
				onClick={props.onActionButtonClick}
			>
				{props.actionButtonName}
			</FButton>
		</div>
	);
};
