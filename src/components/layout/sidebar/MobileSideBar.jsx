import { useTheme } from "../../../hooks/use-theme";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { renderLinks } from "./sidebar-links";
import { MenuItem } from "./MenuItem";

export const MobileSideBar = () => {
    const {
        theme
    } = useTheme();

    const [menuItems, setMenuItems] = useState([]);
    const [activeItem, setActiveItem] = useState(null);

    useEffect(() => {
        const menuLinks = renderLinks();
        setMenuItems(menuLinks);
    }, []);

    const [menuIsOpen, setMenuIsOpen] = useState(false);

    return (
        <div
            style={{
                backgroundColor: theme.primaryColor,
                paddingTop: "1rem",
                paddingRight: 0,
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "start",
                    gap: "0.5rem",
                    alignItems: "center"
                }}
            >
                <FontAwesomeIcon
                    icon={"fa fa-solid fa-bars"}
                    style={{
                        color: theme.onPrimary,
                        display: "block",
                        marginLeft: "3rem",
                        marginTop: "1rem",
                        marginBottom: "1.5rem",
                        fontSize: "1.3rem",
                        cursor: "pointer",
                    }}
                    onClick={() => setMenuIsOpen(prevData => !prevData)}
                />
                <Link
                    to={"/"}
                >
                    <figure
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            height: "4rem",
                            // width: "100%",
                            marginBottom: "0.5rem",
                        }}
                    >
                        <img
                            src={"https://cdn2.thecatapi.com/images/bse.jpg"}
                            alt=""
                            style={{}}
                        />
                    </figure>
                </Link>
            </div>
            {menuIsOpen && menuItems?.length && (
                <ul>
                    {menuItems.map(menuItem => (
                        <>
                            <MenuItem
                                menuIsExpanded={menuIsOpen}
                                icon={menuItem.icon}
                                path={menuItem.path}
                                name={menuItem.name}
                                activeItemName={activeItem}
                                setActiveItemName={setActiveItem}
                                elements={menuItem.elements}
                            />
                        </>
                    ))}
                </ul>
            )}
        </div>
    );
};