import React, { useState } from "react";
import { ThemeButton } from "../ThemeButton";
import { COLOR_HIERARCHY, VARIANT } from "../../../context/ThemeContext";




/**
 * @typedef TableButtonProps 
 * @property {Object} style
 * @property {string} className
 * @property {JSX.Element} children
 * @property {import('../ThemeButton').ButtonThemeConfig} themeConfig
 * 
 */

/**
 * 
 * @param {TableButtonProps} props 
 * @returns 
 */

export const TableButton = (props) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <ThemeButton
            {...props}
            themeConfig={props.themeConfig}
            onMouseOver={() => {
                setIsHovered(true);
            }}
            onMouseLeave={() => {
                setIsHovered(false);
            }}                
            className={`${props.className}`}
            style={{
                borderRadius: "0.5rem",                    
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                ...props.style
            }}                
        >
            {props.children}
        </ThemeButton>
    );
};