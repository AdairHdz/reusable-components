import { useEffect, useState } from "react";
import "./TableCell.css";




/**
 * 
 * @param {import('./TableProps').TableCellProps} props 
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