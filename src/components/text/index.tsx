import React from 'react'
import * as styles from "./styles" 
import { FStyledTextProps } from './types'

export const FStyledText = (props: FStyledTextProps) => {
    return (
        <div className={styles.FStyledTextDiv(props)}>
            {props.children}
        </div>
    )
} 
