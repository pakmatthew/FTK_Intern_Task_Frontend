import { PopupProps } from "./types";
import * as style from './styles'
import { useEffect, useRef } from "react";
import ScreenSize from "../../utils";
import { FStyledText } from "@fantaskticedtechlimited/fantasktic-comp-library";
import { FontTypes, ColorTypes } from "@fantaskticedtechlimited/fantasktic-comp-library/lib/esm/types";


export const PopUp = (props: PopupProps) => {
    const PopupRef = useRef<HTMLDivElement>(null)
    const [width, height] = ScreenSize()

    const ClickPopupOutside = (event: any) => {
        if (
            PopupRef.current &&
            !PopupRef.current.contains(event.target)
        )  
        props.renderOpenPopup(false)
    };

    useEffect(() => {
        window.addEventListener('mousedown', ClickPopupOutside);
        return () => {
            window.removeEventListener('mousedown', ClickPopupOutside)
        }
    }, [])
    
    return(
        <div
            ref={PopupRef} 
            className={style.PopupContainer(width, height)}
        >
            <FStyledText
                font={FontTypes.B16}
                color={ColorTypes.BRAND}
                children={props.title}
            />
            {props.children}
        </div>
    )
}
