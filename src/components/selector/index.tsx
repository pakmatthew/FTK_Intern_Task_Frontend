import React, { useEffect, useRef, useState } from "react"
import { FStyledText } from ".."
import { ColorTypes, FontTypes } from "../../assets/types"
import * as styles from "./styles"
import { selectorArrow } from "./svg"
import { FSelectorProps } from "./types"


export const FSelector = (props: FSelectorProps) => {
    const [isClicked, setIsClicked] = useState<boolean>(false)
    const selectorRef = useRef<HTMLDivElement>(null) 

    const handleClickOutside = (event: any) => {
        if ( selectorRef.current && !selectorRef.current.contains(event.target) )
            setIsClicked(false)
    };

    useEffect(() => {
        window.addEventListener('mousedown', handleClickOutside);
        return () => {
            window.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    useEffect(() => {
        if(props.selectedOption)
            setIsClicked(false)
    }, [props.selectedOption])
    
    return(
        <div 
            className={styles.FSelectorContentContainer(props)}
            ref={selectorRef}  
        >
            <div 
                className={styles.FSelectorDiv(props, isClicked)}
                onClick={()=> !props.disabled && setIsClicked(!isClicked)}  
            >
                {
                    props.selectedOption ?
                        <div className={styles.FSelectorContentDiv(props)}>
                            <FStyledText
                                font={FontTypes.M12}
                                color={isClicked ? ColorTypes.BRAND : ColorTypes.BLACK}
                                maxRows={1}
                                whiteSpace="pre-wrap"
                            >
                                { props.label }
                            </FStyledText>
                            <FStyledText
                                font={FontTypes.M14}
                                color={isClicked ? ColorTypes.BRAND : ColorTypes.BLACK}
                                maxRows={1}
                                whiteSpace="pre-wrap"
                            >
                                { props.selectedOption }
                            </FStyledText>
                        </div>
                    : 
                        <FStyledText
                            font={FontTypes.M14}
                            color={ColorTypes.GREY}
                            maxRows={1}
                            whiteSpace="pre-wrap"
                        >
                            { props.placeholder }
                        </FStyledText>
                }    
                { selectorArrow(isClicked) }
            </div> 
            {
                isClicked ?
                    <div className={styles.FSelectorDropdownDiv(selectorRef, isClicked)}>
                        { props.children }
                    </div> 
                : undefined
            }
        </div>
    )
}
