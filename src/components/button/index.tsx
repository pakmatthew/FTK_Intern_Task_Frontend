import React from 'react'
import * as styles from "./styles" 
import { FButtonProps } from './types'

export const FButton = (props: FButtonProps) => {
    return (
        <div 
            className={styles.FButtonDiv(props)} 
            onClick={props.disabled ? undefined : props.onClick}
        >
            {props.children}
        </div>
    )
} 