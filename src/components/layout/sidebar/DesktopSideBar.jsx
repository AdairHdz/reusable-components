import { MenuItem } from "./MenuItem";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "../../../hooks/use-theme";
import { useState } from "react";
import { useEffect } from "react";
import { renderLinks } from "./sidebar-links";

export const DesktopSideBar = () => {
    const {
        theme
    } = useTheme();    

    const [activeItem, setActiveItem] = useState(null);
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        const menuLinks = renderLinks();
        setMenuItems(menuLinks);
    }, []);

    return (
        <div
            id="theme-layout-sidebar"        
            style={{
                backgroundColor: theme.primaryColor,
                paddingTop: "1rem",
                paddingRight: 0,
                
            }}
        >
            
            <FontAwesomeIcon
                icon={"fa fa-solid fa-bars"}
                style={{
                    color: theme.onPrimary,
                    display: "block",
                    marginLeft: "auto",
                    marginRight: !menuIsOpen ? "auto" : "2rem",
                    marginTop: "1rem",
                    marginBottom: "0",
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
                        height: menuIsOpen ? "7rem" : "4rem",
                        marginBottom: "0.5rem"
                    }}
                >
                    <img
                        src={"https://cdn2.thecatapi.com/images/bse.jpg"}
                        alt=""
                        style={{}}
                    />
                </figure>
            </Link>

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
        </div>
    );
};