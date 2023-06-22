import { useEffect, useState } from "react";
import "./TableCell.css";

/**
 * @typedef CellThemeConfig
 * @property {Object} background
 * @property {string} background.color
 * @property {string} background.onHoverColor
 * @property {Object} border
 * @property {string} border.color
 * @property {string} border.onHoverColor
 * @property {Object} text
 * @property {string} text.color
 * @property {string} text.onHoverColor
 */

/**
 * @typedef TableCellProps
 * @property {boolean} hovered 
 * @property {JSX.Element} children
 * @property {CellThemeConfig} themeConfig
 */


/**
 * 
 * @param {TableCellProps} props 
 * @returns 
 */
export const TableCell = (props) => {
    const [isHovered, setIsHovered] = useState(props.hovered);

    useEffect(() => {
        setIsHovered(props.hovered);
    }, [props.hovered]);

    return (
        <td
            className="theme-table-body-cell"
            onMouseEnter={() => {
                if(props.hovered) {
                    return;
                }
                setIsHovered(true);
            }}
            onMouseLeave={() => {
                if(props.hovered) {
                    return;
                }
                setIsHovered(false);
            }}
            style={{
                borderBottom: `1px solid ${isHovered ? props.themeConfig.border?.onHoverColor : props.themeConfig.border?.color}`,
                borderTop: `1px solid ${isHovered ? props.themeConfig.border?.onHoverColor : props.themeConfig.border?.color}`,
                color: isHovered ? props.themeConfig.text?.onHoverColor : props.themeConfig.text?.color,
                borderLeftColor: isHovered ? props.themeConfig.border?.onHoverColor : props.themeConfig.border?.color,
                borderRightColor: isHovered ? props.themeConfig.border?.onHoverColor : props.themeConfig.border?.color,
                backgroundColor: isHovered ? props.themeConfig.background?.onHoverColor : props.themeConfig.background?.color
            }}>
                {props.children}
            </td>
    );
};