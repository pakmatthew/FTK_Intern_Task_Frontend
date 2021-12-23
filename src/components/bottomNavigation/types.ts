import { MouseEventHandler } from "react";
import { ColorTypes } from "../../assets/types";

export interface FBottomNavigationProps {
	actionButtonName: string;
	leadingButtonName: string;
	onActionButtonClick: MouseEventHandler<any>;
	onLeadingButtonClick: MouseEventHandler<any>;
	actionButtonColor?: ColorTypes;
	disableActionButton?: boolean;
	leadingButtonColor?: ColorTypes;
}
