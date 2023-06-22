import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useTheme } from "../../hooks/use-theme";
import { useState } from "react";




/**
 * @typedef ThemeConfig
 * @property {Object} background
 * @property {string} background.color
 * @property {string} background.onHoverColor
 * @ property {Object} border
 * @ property {string} border.color
 * @ property {string} border.onHoverColor
 * @property {Object} text
 * @property {string} text.color
 * @property {string} text.onHoverColor
 */


/**
 * @typedef HoverableListItemProps
 * @property {ThemeConfig} themeConfig
 * @property {JSX.Element} children
 */

/**
 * 
 * @param {HoverableListItemProps} props
 * @returns 
 */

export const HoverableListItem = (props) => {
    const {
        theme
    } = useTheme();

    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => {
                setIsHovered(true);
            }}
            onMouseLeave={() => {
                setIsHovered(false);
            }}
            style={{
                backgroundColor: isHovered ? props.themeConfig?.background?.onHoverColor : props.themeConfig?.background?.color,
                color: isHovered ? props.themeConfig?.text?.onHoverColor : props.themeConfig?.text?.color,
                marginBottom: "0.3rem",
                // cursor: isHovered ? "pointer" : "default",
                transition: "all 0.2s ease-in-out",
                // border: "1px solid #ddd",
                paddingBottom: 0,
                paddingTop: "0.4rem",
                paddingLeft: "0.8rem",
                paddingRight: "0.8rem",
                display: "flex",
                justifyContent: "space-between",
                borderRadius: "10rem",
            }}
        >
            {props.children}
        </div >
    );
};