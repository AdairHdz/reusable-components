import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { ThemeButton } from "../ThemeButton";
import { useTheme } from "../../../hooks/use-theme";

/**
 * @typedef RowActionsProps
 * @property {string} rowId
 * @property {(rowId) => {}} onDelete
 * @property {boolean} isHovered
 */

/**
 * @param {RowActionsProps} props
 * @returns 
 */
export const RowActions = (props) => {

    const style = {
        textAlign: "center",
        padding: "0.3rem 0.5rem",
        borderRadius: "0.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    };

    const {
        theme
    } = useTheme();

    return (
        <div className="d-flex flex-column justify-content-center flex-lg-row gap-2">
            <Link
                to={`see/${props.rowId}`}
            >
                <ThemeButton
                    className="w-md-100"
                    style={style}
                    isHovered={props.isHovered}
                    themeConfig={{
                        background: {
                            color: "transparent",
                            onHoverColor: theme.secondaryColor
                        },
                        border: {
                            color: theme.secondaryColor,                            
                        },
                        text: {
                            color: theme.secondaryColor,
                            onHoverColor: theme.onSecondary
                        }
                    }}
                >
                    <FontAwesomeIcon icon={"fa-r fa-eye"} />
                </ThemeButton>
            </Link>
            <Link
                to={`edit/${props.rowId}`}
            >
                <ThemeButton
                    className="w-md-100"
                    isHovered={props.isHovered}
                    style={style}
                    themeConfig={{
                        background: {
                            color: "transparent",
                            onHoverColor: theme.secondaryColor
                        },
                        border: {
                            color: theme.secondaryColor,                            
                        },
                        text: {
                            color: theme.secondaryColor,
                            onHoverColor: theme.onSecondary
                        }
                    }}
                >
                    <FontAwesomeIcon icon={"fas fa-pen-to-square"} />
                </ThemeButton>
            </Link>
            <ThemeButton
                className="w-md-100"
                style={style}
                isHovered={props.isHovered}
                themeConfig={{
                    background: {
                        color: "transparent",
                        onHoverColor: theme.secondaryColor
                    },
                    border: {
                        color: theme.secondaryColor,                            
                    },
                    text: {
                        color: theme.secondaryColor,
                        onHoverColor: theme.onSecondary
                    }
                }}
                onClick={() => {
                    // props.onDelete();
                }}
            >
                <FontAwesomeIcon icon={"fas fa-ban"} />
            </ThemeButton>

        </div>
    );
};