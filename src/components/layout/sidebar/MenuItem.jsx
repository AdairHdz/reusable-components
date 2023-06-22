import styled from "styled-components";
import { useTheme } from "../../../hooks/use-theme";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

/**
 * @typedef MenuItemProps 
 * @property {string} name
 * @property {string} activeItemName
 * @property {string} path
 * @property {boolean} menuIsExpanded
 * @property {(itemId) => {}} setActiveItemName
 * @property {JSX.Element} icon
 * @property {Array<MenuItemProps>} elements
 */

/**
 * 
 * @param {MenuItemProps} props 
 * @returns 
 */
export const MenuItem = (props) => {
    const {
        theme
    } = useTheme();

    const [isOpen, setIsOpen] = useState(false);


    const HoverableMobileMenuIcon = styled.div`

        position:relative;
        & div {
            display: none;
        }    
    
        &:hover div {
            display: ${props.path && !props.elements ? 'none' : 'block'};
        }

        & div li:hover {
            background-color: ${theme.onPrimary};
            color: ${theme.primaryColor};
            font-weight: bold;
        }
    `;

    return (
        <li
            style={{
                listStyle: "none",
                color: theme.onPrimary,
                width: "100%",
                cursor: "pointer",
                position: "relative",
                marginBottom: "1rem"
            }}
            onClick={(e) => {
                e.preventDefault();
                setIsOpen(prevData => !prevData);
            }}
        >
            <div style={{
                display: "flex",
                marginBottom: "0.5rem",
            }}>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        width: "100%",
                        paddingRight: "2rem",
                    }}
                >
                    <div
                        style={{
                            position: "relative"
                        }}
                    >
                        <HoverableMobileMenuIcon>
                            {(!props.menuIsExpanded && props.path && !props.elements) ? (
                                <>
                                    <Link to={props.path} style={{
                                        color: theme.onPrimary
                                    }}>
                                        {props.icon}
                                    </Link>
                                </>
                            ) : (
                                <>
                                    {props.icon}
                                </>
                            )}
                            {!props.menuIsExpanded && (
                                <div style={{
                                    position: "absolute",
                                    left: "100%",
                                    top: "0",
                                    backgroundColor: theme.primaryColor,
                                    padding: "1rem 3rem",
                                    zIndex: 2,
                                    minWidth: "15rem"
                                }}>
                                    <p
                                        style={{
                                            fontSize: "1rem",
                                            borderBottom: `1px solid ${theme.onPrimary}`
                                        }}
                                    >
                                        {props.name}
                                    </p>
                                    {props.elements?.map(element => (
                                        <Link key={element.name} to={element.path} style={{
                                            textDecoration: "none",
                                            color: theme.onPrimary
                                        }}>
                                            <li

                                                style={{
                                                    marginBottom: "0.3rem"
                                                }}
                                            >
                                                {element.name}
                                            </li>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </HoverableMobileMenuIcon>
                    </div>
                    {props.menuIsExpanded && (
                        <>
                            {props.path && !props.elements ? (
                                <>

                                    <Link to={props.path}
                                        style={{
                                            listStyle: "none",
                                            color: theme.onPrimary
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontSize: "1rem",
                                                textOverflow: "ellipsis",
                                            }}
                                        >
                                            {props.name}
                                        </span>
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <span
                                        style={{
                                            fontSize: "1rem",
                                            textOverflow: "ellipsis"
                                        }}
                                    >
                                        {props.name}
                                    </span>
                                    <FontAwesomeIcon
                                        icon={"fa fa-solid fa-chevron-down"}
                                        style={{
                                            marginRight: "0.5rem",
                                            fontSize: "0.8rem",
                                            transform: `${isOpen ? 'rotate(180deg)' : 'rotate(0)'}`,
                                            transition: "all 0.2s ease"
                                        }}
                                    />
                                </>
                            )}
                        </>
                    )}
                </div>
            </div>

            {isOpen && props.menuIsExpanded && (
                <ul>
                    {props.elements?.map(element => (
                        <>
                            <li
                                style={{
                                    listStyle: "none",
                                    backgroundColor: props.activeItemName === element.name ? theme.onPrimary : '',
                                    borderTopLeftRadius: props.activeItemName === element.name ? "1rem" : '',
                                    borderBottomLeftRadius: props.activeItemName === element.name ? "1rem" : '',
                                    borderRight: "none",
                                    // paddingTop: "0.4rem",
                                    // paddingBottom: "0.4rem",
                                    paddingLeft: "1rem",
                                }}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    props.setActiveItemName(element.name);
                                }}
                            >
                                <Link
                                    key={element.name}
                                    to={element.path}
                                    style={{
                                        display: "block",

                                        paddingTop: "0.4rem",
                                        paddingBottom: "0.4rem",
                                    }}
                                >
                                    <span
                                        style={{
                                            color: props.activeItemName === element.name ? theme.primaryColor : theme.onPrimary,
                                            fontWeight: props.activeItemName === element.name ? "bold" : 'normal',
                                            fontSize: "0.9rem"
                                        }}
                                    >
                                        {element.name}
                                    </span>
                                </Link>

                            </li>

                        </>

                    ))}
                </ul>
            )}

        </li>
    );
};