import { useEffect, useState } from "react";
import { useTheme } from "../../../hooks/use-theme";
import "./TableRow.css";
import { TableCell } from "./TableCell";

import { Link } from "react-router-dom";
import { BaseButton } from "../buttons/BaseButton";

/**
 * @typedef ThemeConfig
 * @property {Object} background
 * @property {string} background.color
 * @property {string} background.onHoverColor
 * @property {Object} border
 * @property {string} border.color
 * @property {string} border.onHoverColor
 * @property {Object} text
 * @property {string} text.color
 * @property {string} text.onHoverColor
 * @property {CellThemeConfig} cellThemeConfig
 */

/**
 * @typedef ThemeTableProps 
 * @property {ThemeConfig} rowThemeConfig 
 * @property {ThemeConfig} rowActionsButtonsThemeConfig
 * @property {string} id
 * @property {string} activeRowId
 * @property {Function} setActiveRow
 * @property {Object} data
 * @property {(rowId: any, path: string) => {}} setRowId
 */

/**
 * 
 * @param {ThemeTableProps} props 
 * @returns 
 */
export const TableRow = (props) => {

    const [hovered, setIsHovered] = useState(false);
    const {
        theme
    } = useTheme();

    const renderCells = () => {
        const cells = [];
        for (const [key, value] of Object.entries(props.data)) {
            cells.push(
                <TableCell
                    hovered={hovered || props.activeRowId === props.id}
                    themeConfig={{
                        border: {
                            color: props.rowThemeConfig?.border?.color ?? theme.secondaryColor,
                            onHoverColor: props.rowThemeConfig?.border?.onHoverColor ?? theme.tertiaryColor
                        },
                        text: {
                            color: props.rowThemeConfig?.text?.color ?? theme.secondaryColor,
                            onHoverColor: props.rowThemeConfig?.text?.onHoverColor ?? theme.onTertiary
                        },
                        background: {
                            color: props.rowThemeConfig?.background?.color ?? "transparent",
                            onHoverColor: props.rowThemeConfig?.background?.onHoverColor ?? theme.tertiaryColor
                        }
                    }}
                >
                    {typeof value === "object" ? (

                        <>
                            {Array.isArray(value) && value.length > 0 && (
                                <>
                                    <div className="d-flex flex-column justify-content-lg-center flex-xl-row gap-2">
                                        {props.data[key].map(action => {
                                            if (!action.show) {
                                                return null;
                                            }
                                            if (action.type === "ACTION") {
                                                return (
                                                    <BaseButton
                                                        isHovered={hovered || props.activeRowId === props.id}
                                                        key={action.path}
                                                        className="w-lg-100"
                                                        style={{
                                                            textAlign: "center",
                                                            padding: "0.3rem 0.5rem",
                                                            borderRadius: "0.5rem",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                        }}
                                                        themeConfig={props.rowActionsButtonsThemeConfig ?? {
                                                            background: {
                                                                color: "transparent",
                                                                onHoverColor: theme.secondaryColor
                                                            },
                                                            text: {
                                                                color: theme.secondaryColor,
                                                                onHoverColor: theme.onSecondary
                                                            },
                                                            border: {
                                                                color: theme.secondaryColor
                                                            }
                                                        }}
                                                        onClick={() => {                                                            
                                                            if(action.onClick) {
                                                                return action.onClick();
                                                            } else {
                                                                props.setRowId(props.id, action.path);
                                                            }                                                            
                                                        }}
                                                    >
                                                        {action.content}
                                                    </BaseButton>
                                                );
                                            } else if (action.type === "LINK") {
                                                return (
                                                    <Link key={action.path} to={action.path}>
                                                        <BaseButton
                                                            isHovered={hovered || props.activeRowId === props.id}
                                                            key={action.path}
                                                            className="w-lg-100"
                                                            style={{
                                                                textAlign: "center",
                                                                padding: "0.3rem 0.5rem",
                                                                borderRadius: "0.5rem",
                                                                display: "flex",
                                                                alignItems: "center",
                                                                justifyContent: "center",
                                                                width: "100%"
                                                            }}
                                                            // isHovered={props.isHovered}
                                                            themeConfig={props.rowActionsButtonsThemeConfig ?? {
                                                                background: {
                                                                    color: "transparent",
                                                                    onHoverColor: theme.secondaryColor
                                                                },
                                                                text: {
                                                                    color: theme.secondaryColor,
                                                                    onHoverColor: theme.onSecondary
                                                                },
                                                                border: {
                                                                    color: theme.secondaryColor
                                                                }
                                                            }}
                                                        >
                                                            {action?.content}
                                                        </BaseButton>
                                                    </Link>
                                                );
                                            }
                                            return (
                                                <>
                                                {action?.content}
                                                </>
                                            );

                                        })}
                                    </div>
                                </>
                            )}
                        </>
                    ) : (
                        value
                    )}

                </TableCell>
            );
        }
        return cells;
    };

    useEffect(() => {
        renderCells();
    }, []);

    return (
        <tr
            id={props.id}
            data-testid="themeRow"
            className="theme-table-body-row"
            style={{
                backgroundColor: (hovered || props.activeRowId === props.id) ? (props.themeConfig?.background?.onHoverColor ?? theme.tertiaryColor) : props.themeConfig?.background?.color ?? "transparent",
                color: (hovered || props.activeRowId === props.id) ? props.themeConfig?.text?.onHoverColor ?? theme.onTertiary : props.themeConfig?.text?.color ?? theme.primaryColor,
                border: `1px solid ${(hovered || props.activeRowId === props.id) ? props.themeConfig?.border?.onHoverColor ?? theme.tertiaryColor : props.themeConfig?.border?.color ?? theme.secondaryColor}`,
                transform: (hovered || props.activeRowId === props.id) ? "scale(1.03)" : undefined
            }}
            onMouseOver={() => {
                setIsHovered(true);
            }}
            onMouseOut={() => {
                setIsHovered(false);
            }}
            onClick={() => {
                if (props.activeRowId === props.id) {
                    return props.setActiveRow(null);
                }
                if (props.id !== undefined && props.id !== null) {
                    props.setActiveRow(props.id);
                }
            }}
        >
            {renderCells()}
        </tr>
    );
};