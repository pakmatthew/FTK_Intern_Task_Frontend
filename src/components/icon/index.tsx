import React from 'react' 
import * as styles from "./styles"  
import { FIconProps } from './types'

export const FIcon = (props: FIconProps) => {
    const handleIcon = () => {
        switch (props.name) {
            case "add":
                return(
                    <>
                        {
                            props.size === "large" ?
                            <>
                                <path d="M12 5V19" stroke={props.strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M5 12H19" stroke={props.strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                            </>
                            :
                            <>  
                                <path d="M8 3.33331V12.6666" stroke={props.strokeColor} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M3.33337 8H12.6667" stroke={props.strokeColor} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                            </>
                        } 
                    </>
                )
            case "award":
                return(
                    <>
                        {
                            props.size === "large" ?
                            <>
                                <path d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z" stroke={props.strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M8.21 13.89L7 23L12 20L17 23L15.79 13.88" stroke={props.strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                            </>
                            :
                            <>           
                                <path d="M7.99998 10C10.5773 10 12.6666 7.91066 12.6666 5.33333C12.6666 2.756 10.5773 0.666664 7.99998 0.666664C5.42265 0.666664 3.33331 2.756 3.33331 5.33333C3.33331 7.91066 5.42265 10 7.99998 10Z" stroke={props.strokeColor} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M5.47335 9.26L4.66669 15.3333L8.00002 13.3333L11.3334 15.3333L10.5267 9.25333" stroke={props.strokeColor} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                            </>
                        } 
                    </>
                )
            case "bar_chart":
                return(
                    <>
                        {
                            props.size === "large" ?
                            <>
                                <path d="M18 20V10" stroke={props.strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M12 20V4" stroke={props.strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M6 20V14" stroke={props.strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                            </>
                            :
                            <>   
                                <path d="M12 13.3333V6.66666" stroke={props.strokeColor} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M8 13.3333V2.66666" stroke={props.strokeColor} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M4 13.3333V9.33334" stroke={props.strokeColor} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                            </>
                        } 
                    </>
                )
            case "book":
                return(
                    <>
                        {
                            props.size === "large" ?
                            <>
                                <path d="M4 19.5C4 18.837 4.26339 18.2011 4.73223 17.7322C5.20107 17.2634 5.83696 17 6.5 17H20" stroke={props.strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M6.5 2H20V22H6.5C5.83696 22 5.20107 21.7366 4.73223 21.2678C4.26339 20.7989 4 20.163 4 19.5V4.5C4 3.83696 4.26339 3.20107 4.73223 2.73223C5.20107 2.26339 5.83696 2 6.5 2V2Z" stroke={props.strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                            </>
                            :
                            <>  
                                <path d="M2.66669 13C2.66669 12.558 2.84228 12.1341 3.15484 11.8215C3.4674 11.5089 3.89133 11.3333 4.33335 11.3333H13.3334" stroke={props.strokeColor} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M4.33335 1.33334H13.3334V14.6667H4.33335C3.89133 14.6667 3.4674 14.4911 3.15484 14.1785C2.84228 13.866 2.66669 13.442 2.66669 13V3C2.66669 2.55798 2.84228 2.13405 3.15484 1.82149C3.4674 1.50893 3.89133 1.33334 4.33335 1.33334V1.33334Z" stroke={props.strokeColor} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                            </>
                        } 
                    </>
                )
            case "bookmark":
                return(
                    <>
                        {
                            props.size === "large" ?
                                <path d="M19 21L12 16L5 21V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H17C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V21Z" stroke={props.strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                            : 
                                <path d="M12.6667 14L8.00001 10.6667L3.33334 14V3.33333C3.33334 2.97971 3.47382 2.64057 3.72387 2.39052C3.97392 2.14048 4.31305 2 4.66668 2H11.3333C11.687 2 12.0261 2.14048 12.2762 2.39052C12.5262 2.64057 12.6667 2.97971 12.6667 3.33333V14Z" stroke={props.strokeColor} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>

                        } 
                    </>
                )
            case "calendar":
                return(
                    <>
                        {
                            props.size === "large" ?
                            <>
                                <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke={props.strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M16 2V6" stroke={props.strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M8 2V6" stroke={props.strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M3 10H21" stroke={props.strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                            </>
                            :
                            <>
                                <path d="M12.6667 2.66666H3.33333C2.59695 2.66666 2 3.26362 2 4V13.3333C2 14.0697 2.59695 14.6667 3.33333 14.6667H12.6667C13.403 14.6667 14 14.0697 14 13.3333V4C14 3.26362 13.403 2.66666 12.6667 2.66666Z" stroke={props.strokeColor} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M10.6667 1.33334V4" stroke={props.strokeColor} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M5.33331 1.33334V4" stroke={props.strokeColor} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M2 6.66666H14" stroke={props.strokeColor} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                            </>
                        } 
                    </>
                ) 
            case "close":
                return(
                    <>
                        {
                            props.size === "large" ?
                            <>
                                <path d="M18 6L6 18" stroke={props.strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M6 6L18 18" stroke={props.strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                            </>
                            :
                            <> 
                                <path d="M12 4L4 12" stroke={props.strokeColor} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M4 4L12 12" stroke={props.strokeColor} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                            </>
                        } 
                    </>
                )  
            case "delete":
                return(
                    <>
                        {
                            props.size === "large" ?
                            <>
                                <path d="M3 6H5H21" stroke={props.strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke={props.strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M10 11V17" stroke={props.strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M14 11V17" stroke={props.strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                            </>
                            :
                            <> 
                                <path d="M2 4H3.33333H14" stroke={props.strokeColor} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M5.33334 4.00001V2.66668C5.33334 2.31305 5.47382 1.97392 5.72387 1.72387C5.97392 1.47382 6.31305 1.33334 6.66668 1.33334H9.33334C9.68697 1.33334 10.0261 1.47382 10.2762 1.72387C10.5262 1.97392 10.6667 2.31305 10.6667 2.66668V4.00001M12.6667 4.00001V13.3333C12.6667 13.687 12.5262 14.0261 12.2762 14.2762C12.0261 14.5262 11.687 14.6667 11.3333 14.6667H4.66668C4.31305 14.6667 3.97392 14.5262 3.72387 14.2762C3.47382 14.0261 3.33334 13.687 3.33334 13.3333V4.00001H12.6667Z" stroke={props.strokeColor} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M6.66666 7.33334V11.3333" stroke={props.strokeColor} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M9.33334 7.33334V11.3333" stroke={props.strokeColor} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                            </>
                        } 
                    </>
                ) 
            case "email":
                return(
                    <>
                        {
                            props.size === "large" ?
                            <>
                                <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke={props.strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M22 6L12 13L2 6" stroke={props.strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                            </>
                            :
                            <>
                                <path d="M2.66665 2.66666H13.3333C14.0666 2.66666 14.6666 3.26666 14.6666 3.99999V12C14.6666 12.7333 14.0666 13.3333 13.3333 13.3333H2.66665C1.93331 13.3333 1.33331 12.7333 1.33331 12V3.99999C1.33331 3.26666 1.93331 2.66666 2.66665 2.66666Z" stroke={props.strokeColor} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M14.6666 4L7.99998 8.66667L1.33331 4" stroke={props.strokeColor} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                            </>
                        } 
                    </>
                )   
            case "flag":
                return(
                    <>
                        {
                            props.size === "large" ?
                            <>
                                <path d="M4 15C4 15 5 14 8 14C11 14 13 16 16 16C19 16 20 15 20 15V3C20 3 19 4 16 4C13 4 11 2 8 2C5 2 4 3 4 3V15Z" 
                                    fill={props.fillColor} stroke={props.strokeColor} 
                                    strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M4 22V15" stroke={props.strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                            </>
                            :
                            <>
                                <path d="M2.66669 9.99998C2.66669 9.99998 3.33335 9.33331 5.33335 9.33331C7.33335 9.33331 8.66669 10.6666 10.6667 10.6666C12.6667 10.6666 13.3334 9.99998 13.3334 9.99998V1.99998C13.3334 1.99998 12.6667 2.66665 10.6667 2.66665C8.66669 2.66665 7.33335 1.33331 5.33335 1.33331C3.33335 1.33331 2.66669 1.99998 2.66669 1.99998V9.99998Z" 
                                    fill={props.fillColor} stroke={props.strokeColor} 
                                    strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M2.66669 14.6667V10" stroke={props.strokeColor} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                            </>
                        } 
                    </>
                )  
            case "gift":
                return(
                    <>
                        {
                            props.size === "large" ?
                            <>
                                <path d="M20 12V22H4V12" stroke={props.strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M22 7H2V12H22V7Z" stroke={props.strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M12 22V7" stroke={props.strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M12 7H7.5C6.83696 7 6.20107 6.73661 5.73223 6.26777C5.26339 5.79893 5 5.16304 5 4.5C5 3.83696 5.26339 3.20107 5.73223 2.73223C6.20107 2.26339 6.83696 2 7.5 2C11 2 12 7 12 7Z" stroke={props.strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M12 7H16.5C17.163 7 17.7989 6.73661 18.2678 6.26777C18.7366 5.79893 19 5.16304 19 4.5C19 3.83696 18.7366 3.20107 18.2678 2.73223C17.7989 2.26339 17.163 2 16.5 2C13 2 12 7 12 7Z" stroke={props.strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                             </>
                            :
                            <>  
                                <path d="M13.3333 8V14.6667H2.66663V8" stroke={props.strokeColor} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M14.6667 4.66666H1.33337V8H14.6667V4.66666Z" stroke={props.strokeColor} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M8 14.6667V4.66666" stroke={props.strokeColor} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M8.00004 4.66667H5.00004C4.55801 4.66667 4.13409 4.49107 3.82153 4.17851C3.50897 3.86595 3.33337 3.44203 3.33337 3C3.33337 2.55797 3.50897 2.13405 3.82153 1.82149C4.13409 1.50893 4.55801 1.33334 5.00004 1.33334C7.33337 1.33334 8.00004 4.66667 8.00004 4.66667Z" stroke={props.strokeColor} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M8 4.66667H11C11.442 4.66667 11.866 4.49107 12.1785 4.17851C12.4911 3.86595 12.6667 3.44203 12.6667 3C12.6667 2.55797 12.4911 2.13405 12.1785 1.82149C11.866 1.50893 11.442 1.33334 11 1.33334C8.66667 1.33334 8 4.66667 8 4.66667Z" stroke={props.strokeColor} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                            </>
                        } 
                    </>
                )    
            case "home":
                return(
                    <>
                        {
                            props.size === "large" ?
                            <>
                                <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke={props.strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M9 22V12H15V22" stroke={props.strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                            </>
                            :
                            <>    
                                <path d="M2 6L8 1.33334L14 6V13.3333C14 13.687 13.8595 14.0261 13.6095 14.2761C13.3594 14.5262 13.0203 14.6667 12.6667 14.6667H3.33333C2.97971 14.6667 2.64057 14.5262 2.39052 14.2761C2.14048 14.0261 2 13.687 2 13.3333V6Z" stroke={props.strokeColor} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M6 14.6667V8H10V14.6667" stroke={props.strokeColor} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                            </>
                        } 
                    </>
                )  
            case "image":
                return(
                    <>
                        {
                            props.size === "large" ?
                            <>
                                <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke={props.strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M8.5 10C9.32843 10 10 9.32843 10 8.5C10 7.67157 9.32843 7 8.5 7C7.67157 7 7 7.67157 7 8.5C7 9.32843 7.67157 10 8.5 10Z" stroke={props.strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M21 15L16 10L5 21" stroke={props.strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                            </>
                            :
                            <>
                                <path d="M12.6667 2H3.33333C2.59695 2 2 2.59695 2 3.33333V12.6667C2 13.403 2.59695 14 3.33333 14H12.6667C13.403 14 14 13.403 14 12.6667V3.33333C14 2.59695 13.403 2 12.6667 2Z" stroke={props.strokeColor} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M5.66667 6.66669C6.21896 6.66669 6.66667 6.21897 6.66667 5.66669C6.66667 5.1144 6.21896 4.66669 5.66667 4.66669C5.11439 4.66669 4.66667 5.1144 4.66667 5.66669C4.66667 6.21897 5.11439 6.66669 5.66667 6.66669Z" stroke={props.strokeColor} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M14 10L10.6667 6.66669L3.33333 14" stroke={props.strokeColor} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                            </>
                        } 
                    </>
                )  
            case "input":
                return(
                    <>
                        {
                            props.size === "large" ?
                            <>
                                <path d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13" stroke={props.strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M18.5 2.49998C18.8978 2.10216 19.4374 1.87866 20 1.87866C20.5626 1.87866 21.1022 2.10216 21.5 2.49998C21.8978 2.89781 22.1213 3.43737 22.1213 3.99998C22.1213 4.56259 21.8978 5.10216 21.5 5.49998L12 15L8 16L9 12L18.5 2.49998Z" stroke={props.strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                            </>
                            :
                            <>
                                <path d="M7.33337 2.66669H2.66671C2.31309 2.66669 1.97395 2.80716 1.7239 3.05721C1.47385 3.30726 1.33337 3.6464 1.33337 4.00002V13.3334C1.33337 13.687 1.47385 14.0261 1.7239 14.2762C1.97395 14.5262 2.31309 14.6667 2.66671 14.6667H12C12.3537 14.6667 12.6928 14.5262 12.9428 14.2762C13.1929 14.0261 13.3334 13.687 13.3334 13.3334V8.66669" stroke={props.strokeColor} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M12.3334 1.66665C12.5986 1.40144 12.9583 1.25244 13.3334 1.25244C13.7084 1.25244 14.0682 1.40144 14.3334 1.66665C14.5986 1.93187 14.7476 2.29158 14.7476 2.66665C14.7476 3.04173 14.5986 3.40144 14.3334 3.66665L8.00004 9.99999L5.33337 10.6667L6.00004 7.99999L12.3334 1.66665Z" stroke={props.strokeColor} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                            </>
                        } 
                    </>
                )  
            case "left_arrow":
                return(
                    <>
                        {
                            props.size === "large" ?
                            <>
                                <path d="M19 12H5" stroke={props.strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M12 19L5 12L12 5" stroke={props.strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                            </>
                            :
                            <>    
                                <path d="M12.6666 8H3.33331" stroke={props.strokeColor} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M7.99998 12.6667L3.33331 8.00001L7.99998 3.33334" stroke={props.strokeColor} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                            </>
                        } 
                    </>
                ) 
            case "left_chevron":
                return(
                    <>
                        {
                            props.size === "large" ?
                                <path d="M15 18L9 12L15 6" stroke={props.strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                            :
                                <path d="M10 12L6 8L10 4" stroke={props.strokeColor} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                        } 
                    </>
                )  
            case "logout":
                return(
                    <>
                        {
                            props.size === "large" ?
                            <>
                                <path d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9" stroke={props.strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M16 17L21 12L16 7" stroke={props.strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M21 12H9" stroke={props.strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                            </>
                            :
                            <>    
                                <path d="M6 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H6" stroke={props.strokeColor} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M10.6667 11.3333L14 7.99999L10.6667 4.66666" stroke={props.strokeColor} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M14 8H6" stroke={props.strokeColor} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                            </>
                        } 
                    </>
                )  
            case "maximize":
                return(
                    <>
                        {
                            props.size === "large" ?
                            <>
                                <path d="M15 3H21V9" stroke={props.strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M9 21H3V15" stroke={props.strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M21 3L14 10" stroke={props.strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M3 21L10 14" stroke={props.strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                            </>
                            :
                            <> 
                                <path d="M10 2H14V6" stroke={props.strokeColor} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M6 14H2V10" stroke={props.strokeColor} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M14 2L9.33337 6.66667" stroke={props.strokeColor} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M2 14L6.66667 9.33334" stroke={props.strokeColor} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                            </>
                        } 
                    </>
                ) 
            case "menu":
                return(
                    <>
                        {
                            props.size === "large" ?
                            <>
                                <path d="M3 12H21" stroke={props.strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M8 6H21" stroke={props.strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M12 18H21" stroke={props.strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                            </>
                            :
                            <>
                            </>
                        }
                    </>
                )
            case "more":
                return(
                    <>
                        {
                            props.size === "large" ?
                            <>
                                <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" fill={props.strokeColor} stroke={props.strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" fill={props.strokeColor} stroke={props.strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" fill={props.strokeColor} stroke={props.strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                            </>
                            :
                            <> 
                                <path d="M7.99999 8.66668C8.36818 8.66668 8.66666 8.3682 8.66666 8.00001C8.66666 7.63182 8.36818 7.33334 7.99999 7.33334C7.63181 7.33334 7.33333 7.63182 7.33333 8.00001C7.33333 8.3682 7.63181 8.66668 7.99999 8.66668Z" fill={props.strokeColor} stroke={props.strokeColor} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M7.99999 3.99999C8.36818 3.99999 8.66666 3.70151 8.66666 3.33332C8.66666 2.96513 8.36818 2.66666 7.99999 2.66666C7.63181 2.66666 7.33333 2.96513 7.33333 3.33332C7.33333 3.70151 7.63181 3.99999 7.99999 3.99999Z" fill={props.strokeColor} stroke={props.strokeColor} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M7.99999 13.3333C8.36818 13.3333 8.66666 13.0349 8.66666 12.6667C8.66666 12.2985 8.36818 12 7.99999 12C7.63181 12 7.33333 12.2985 7.33333 12.6667C7.33333 13.0349 7.63181 13.3333 7.99999 13.3333Z" fill={props.strokeColor} stroke={props.strokeColor} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                            </>
                        } 
                    </>
                ) 
            case "multi_select":
                return(
                    <>
                        {
                            props.size === "large" ?
                            <>
                                <path d="M9 11L12 14L22 4" stroke={props.strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke={props.strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                            </>
                            :
                            <> 
                                <path d="M6 7.33335L8 9.33335L14.6667 2.66669" stroke={props.strokeColor} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M14 8V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H10.6667" stroke={props.strokeColor} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                            </>
                        } 
                    </>
                )    
            case "notification":
                return(
                    <>
                        {
                            props.size === "large" ?
                            <>
                                <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke={props.strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M13.73 21C13.5542 21.3031 13.3018 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6981 21.5547 10.4458 21.3031 10.27 21" stroke={props.strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                              </>
                            :
                            <>
                                <path d="M12 5.33331C12 4.27245 11.5786 3.25503 10.8284 2.50489C10.0783 1.75474 9.06087 1.33331 8 1.33331C6.93913 1.33331 5.92172 1.75474 5.17157 2.50489C4.42143 3.25503 4 4.27245 4 5.33331C4 9.99998 2 11.3333 2 11.3333H14C14 11.3333 12 9.99998 12 5.33331Z" stroke={props.strokeColor} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M9.15335 14C9.03614 14.2021 8.86791 14.3698 8.6655 14.4864C8.46309 14.6029 8.2336 14.6643 8.00001 14.6643C7.76643 14.6643 7.53694 14.6029 7.33453 14.4864C7.13212 14.3698 6.96389 14.2021 6.84668 14" stroke={props.strokeColor} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                            </>
                        } 
                    </>
                )   
            case "ranking":
                return(
                    <>
                        {
                            props.size === "large" ?
                            <>
                                <path d="M17 10L12 5L7 10" stroke={props.strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M7.00003 14L12 19L17 14" stroke={props.strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                            </>
                            :
                            <>             
                                <path d="M12 6L8 2L4 6" stroke={props.strokeColor} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M4 9L8 13L12 9" stroke={props.strokeColor} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                            </>
                        } 
                    </>
                )  
            case "right_arrow":
                return(
                    <>
                        {
                            props.size === "large" ?
                            <>
                                <path d="M5 12H19" stroke={props.strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M12 5L19 12L12 19" stroke={props.strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                            </>
                            :
                            <>  
                                <path d="M3.33331 8H12.6666" stroke={props.strokeColor} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M8 3.33334L12.6667 8.00001L8 12.6667" stroke={props.strokeColor} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                            </>
                        } 
                    </>
                )     
            case "right_chevron":
                return(
                    <>
                        {
                            props.size === "large" ?
                                <path d="M9 18L15 12L9 6" stroke={props.strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                            : 
                                <path d="M6 12L10 8L6 4" stroke={props.strokeColor} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                        } 
                    </>
                ) 
            case "search":
                return(
                    <>
                        {
                            props.size === "large" ? 
                            <>
                                <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke={props.strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M21 21L16.65 16.65" stroke={props.strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                            </> :
                            <>
                                <path d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z" stroke={props.strokeColor} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M14 14L11.1 11.1" stroke={props.strokeColor} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                            </>   
                        }
                    </>
                )  
            case "select":
                return(
                    <>
                        {
                            props.size === "large" ?
                            <>
                                <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke={props.strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M22 4L12 14.01L9 11.01" stroke={props.strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                            </>
                            :
                            <>  
                                <path d="M14.6666 7.38668V8.00001C14.6658 9.43763 14.2003 10.8365 13.3395 11.9879C12.4788 13.1393 11.2688 13.9817 9.89022 14.3893C8.5116 14.7969 7.03815 14.7479 5.68963 14.2497C4.3411 13.7515 3.18975 12.8307 2.40729 11.6247C1.62482 10.4187 1.25317 8.99205 1.34776 7.55755C1.44235 6.12305 1.99812 4.75756 2.93217 3.66473C3.86621 2.57189 5.1285 1.81027 6.53077 1.49344C7.93304 1.17662 9.40016 1.32157 10.7133 1.90668" stroke={props.strokeColor} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M14.6667 2.66669L8 9.34002L6 7.34002" stroke={props.strokeColor} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                            </>
                        } 
                    </>
                )   
            case 'setting':
                return(
                    <>
                    {
                        props.size === "large" ?
                        <>
                            <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke={props.strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15V15Z" stroke={props.strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                        </>
                        :
                        <>     
                            <path d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z" stroke={props.strokeColor} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12.9333 10C12.8446 10.2011 12.8181 10.4241 12.8573 10.6404C12.8965 10.8567 12.9996 11.0562 13.1533 11.2134L13.1933 11.2534C13.3173 11.3772 13.4157 11.5242 13.4828 11.6861C13.5498 11.848 13.5844 12.0215 13.5844 12.1967C13.5844 12.3719 13.5498 12.5454 13.4828 12.7073C13.4157 12.8691 13.3173 13.0162 13.1933 13.14C13.0695 13.264 12.9225 13.3623 12.7606 13.4294C12.5987 13.4965 12.4252 13.5311 12.25 13.5311C12.0748 13.5311 11.9013 13.4965 11.7394 13.4294C11.5776 13.3623 11.4305 13.264 11.3067 13.14L11.2667 13.1C11.1096 12.9463 10.91 12.8432 10.6937 12.804C10.4775 12.7648 10.2544 12.7913 10.0533 12.88C9.85616 12.9645 9.68799 13.1048 9.56954 13.2837C9.45109 13.4626 9.38753 13.6722 9.38667 13.8867V14C9.38667 14.3536 9.2462 14.6928 8.99615 14.9428C8.7461 15.1929 8.40696 15.3334 8.05334 15.3334C7.69972 15.3334 7.36058 15.1929 7.11053 14.9428C6.86048 14.6928 6.72 14.3536 6.72 14V13.94C6.71484 13.7194 6.64342 13.5053 6.51501 13.3258C6.38661 13.1463 6.20716 13.0095 6 12.9334C5.79893 12.8446 5.57588 12.8181 5.35961 12.8573C5.14335 12.8966 4.94379 12.9997 4.78667 13.1534L4.74667 13.1934C4.62284 13.3173 4.47579 13.4157 4.31393 13.4828C4.15206 13.5499 3.97856 13.5844 3.80334 13.5844C3.62812 13.5844 3.45462 13.5499 3.29275 13.4828C3.13089 13.4157 2.98384 13.3173 2.86 13.1934C2.73604 13.0695 2.63769 12.9225 2.57059 12.7606C2.50349 12.5987 2.46896 12.4252 2.46896 12.25C2.46896 12.0748 2.50349 11.9013 2.57059 11.7394C2.63769 11.5776 2.73604 11.4305 2.86 11.3067L2.9 11.2667C3.0537 11.1096 3.1568 10.91 3.19601 10.6937C3.23522 10.4775 3.20875 10.2544 3.12 10.0534C3.0355 9.85617 2.89518 9.68801 2.71632 9.56956C2.53746 9.45111 2.32786 9.38754 2.11334 9.38669H2.00001C1.64638 9.38669 1.30724 9.24621 1.0572 8.99616C0.807148 8.74611 0.666672 8.40698 0.666672 8.05335C0.666672 7.69973 0.807148 7.36059 1.0572 7.11054C1.30724 6.8605 1.64638 6.72002 2.00001 6.72002H2.06C2.28067 6.71486 2.49467 6.64343 2.6742 6.51503C2.85373 6.38662 2.99048 6.20718 3.06667 6.00002C3.15541 5.79894 3.18189 5.57589 3.14267 5.35963C3.10346 5.14336 3.00036 4.94381 2.84667 4.78669L2.80667 4.74669C2.6827 4.62286 2.58436 4.4758 2.51726 4.31394C2.45016 4.15208 2.41562 3.97857 2.41562 3.80335C2.41562 3.62813 2.45016 3.45463 2.51726 3.29277C2.58436 3.1309 2.6827 2.98385 2.80667 2.86002C2.9305 2.73605 3.07755 2.63771 3.23942 2.57061C3.40128 2.50351 3.57478 2.46897 3.75 2.46897C3.92523 2.46897 4.09873 2.50351 4.26059 2.57061C4.42246 2.63771 4.56951 2.73605 4.69334 2.86002L4.73334 2.90002C4.89046 3.05371 5.09002 3.15681 5.30628 3.19602C5.52254 3.23524 5.74559 3.20876 5.94667 3.12002H6C6.19718 3.03551 6.36535 2.89519 6.4838 2.71633C6.60225 2.53747 6.66582 2.32788 6.66667 2.11335V2.00002C6.66667 1.6464 6.80715 1.30726 7.0572 1.05721C7.30724 0.807163 7.64638 0.666687 8 0.666687C8.35363 0.666687 8.69276 0.807163 8.94281 1.05721C9.19286 1.30726 9.33334 1.6464 9.33334 2.00002V2.06002C9.33419 2.27454 9.39776 2.48414 9.51621 2.663C9.63466 2.84186 9.80283 2.98218 10 3.06669C10.2011 3.15543 10.4241 3.1819 10.6404 3.14269C10.8567 3.10348 11.0562 3.00038 11.2133 2.84669L11.2533 2.80669C11.3772 2.68272 11.5242 2.58437 11.6861 2.51727C11.8479 2.45017 12.0215 2.41564 12.1967 2.41564C12.3719 2.41564 12.5454 2.45017 12.7073 2.51727C12.8691 2.58437 13.0162 2.68272 13.14 2.80669C13.264 2.93052 13.3623 3.07757 13.4294 3.23943C13.4965 3.4013 13.5311 3.5748 13.5311 3.75002C13.5311 3.92524 13.4965 4.09874 13.4294 4.26061C13.3623 4.42247 13.264 4.56952 13.14 4.69335L13.1 4.73335C12.9463 4.89047 12.8432 5.09003 12.804 5.30629C12.7648 5.52256 12.7913 5.74561 12.88 5.94669V6.00002C12.9645 6.1972 13.1048 6.36536 13.2837 6.48382C13.4626 6.60227 13.6721 6.66583 13.8867 6.66669H14C14.3536 6.66669 14.6928 6.80716 14.9428 7.05721C15.1929 7.30726 15.3333 7.6464 15.3333 8.00002C15.3333 8.35364 15.1929 8.69278 14.9428 8.94283C14.6928 9.19288 14.3536 9.33335 14 9.33335H13.94C13.7255 9.33421 13.5159 9.39777 13.337 9.51622C13.1582 9.63468 13.0178 9.80284 12.9333 10V10Z" stroke={props.strokeColor} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                        </>
                    }
                    </>
                )
            case "topic":
                return( 
                    <>
                        {
                            props.size === "large" ?
                            <>
                                <path d="M18 21C19.6569 21 21 19.6569 21 18C21 16.3431 19.6569 15 18 15C16.3431 15 15 16.3431 15 18C15 19.6569 16.3431 21 18 21Z" stroke={props.strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M6 9C7.65685 9 9 7.65685 9 6C9 4.34315 7.65685 3 6 3C4.34315 3 3 4.34315 3 6C3 7.65685 4.34315 9 6 9Z" stroke={props.strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M13 6H16C16.5304 6 17.0391 6.21071 17.4142 6.58579C17.7893 6.96086 18 7.46957 18 8V15" stroke={props.strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M6 9V21" stroke={props.strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></>
                            :
                            <>
                                <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" stroke={props.strokeColor} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke={props.strokeColor} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M8.66663 4H10.6666C11.0202 4 11.3594 4.14048 11.6094 4.39052C11.8595 4.64057 12 4.97971 12 5.33333V10" stroke={props.strokeColor} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M4 6V14" stroke={props.strokeColor} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                            </>
                        } 
                    </>
                )   
            case "user":
                return(
                    <>
                        {
                            props.size === "large" ?
                            <>
                                <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke={props.strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke={props.strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke={props.strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M16 3.13C16.8604 3.3503 17.623 3.8507 18.1676 4.55231C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke={props.strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                            </>
                            :
                            <>   
                                <path d="M11.3333 14V12.6667C11.3333 11.9594 11.0523 11.2811 10.5522 10.781C10.0521 10.281 9.37387 10 8.66663 10H3.33329C2.62605 10 1.94777 10.281 1.44767 10.781C0.947578 11.2811 0.666626 11.9594 0.666626 12.6667V14" stroke={props.strokeColor} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M6.00004 7.33333C7.4728 7.33333 8.66671 6.13943 8.66671 4.66667C8.66671 3.19391 7.4728 2 6.00004 2C4.52728 2 3.33337 3.19391 3.33337 4.66667C3.33337 6.13943 4.52728 7.33333 6.00004 7.33333Z" stroke={props.strokeColor} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M15.3334 14V12.6667C15.3329 12.0758 15.1363 11.5018 14.7743 11.0349C14.4123 10.5679 13.9055 10.2344 13.3334 10.0867" stroke={props.strokeColor} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M10.6666 2.08666C11.2402 2.23353 11.7487 2.56713 12.1117 3.03487C12.4748 3.50261 12.6719 4.07788 12.6719 4.67C12.6719 5.26211 12.4748 5.83738 12.1117 6.30512C11.7487 6.77286 11.2402 7.10646 10.6666 7.25333" stroke={props.strokeColor} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                            </>
                        } 
                    </>
                )
            default: return( <> </> )
        }
    }

    return (
        <svg
            className={styles.FIconDiv(props)} 
            viewBox={props.size === "large" ? `0 0 24 24` : `0 0 16 16`} fill="none" xmlns="http://www.w3.org/2000/svg"
        > 
            {handleIcon()}
        </svg>
    )
} 