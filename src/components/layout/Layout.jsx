import { Outlet } from "react-router-dom";
// import "./ThemeLayout.css";
// import styled from "styled-components";
import { DesktopSideBar } from "./sidebar/DesktopSideBar";
import { MobileSideBar } from "./sidebar/MobileSideBar";
import { useWindowSize } from "../../hooks/use-window-size";
import { DropdownButton } from "../generics/dropdown/DropdownButton"
import { styled } from "styled-components";
import { useAuth } from "../../hooks/use-auth";

export const Layout = (props) => {
    const {
        windowSize
    } = useWindowSize();

    const StyledUserName = styled.span`
      display: none;
      margin-left: 1rem;
      margin-right: 1rem;
    
      @media screen and (min-width: 1200px) {
        display: inline-block;
      }
    `;

    const StyledDropdown = styled(DropdownButton)`
    position: absolute;
    right: 5rem;
    top: 1rem;
    
    @media screen and (max-width: 768px) {    
        top: 1rem;        
    }

    @media screen and (max-width: 576px) {  
        right: 0;
    }
    `;

    const StyledLayoutContent = styled.div`
    width: 100%;
    @media screen and (max-width: 768px) {
    
        padding: 3rem 1rem; 
    }

    @media screen and (min-width: 769px) {  

        padding: 5rem 3rem;
    }
    `;

    const StyledLayoutSuperContainer = styled.div`
    @media screen and (max-width: 768px) {
        flex-direction: column;
            margin-bottom: 1rem;  
    }
    `;

    const {
        user
    } = useAuth();

    return (
        <StyledLayoutSuperContainer            
            style={{
                display: "flex",
            }}
        >
            {(windowSize.width > 768) ? (
                <DesktopSideBar />
            ) : (
                <MobileSideBar />
            )}
            <StyledLayoutContent
                id="theme-content"
                style={{
                    // flexGrow: 1,
                    position: "relative",
                }}
            >
                <StyledDropdown
                    lead={(
                        <>
                            <figure
                            >
                                <img
                                    src={"https://cdn2.thecatapi.com/images/bse.jpg"}
                                    style={{
                                        height: "3rem",
                                        width: "3rem",
                                        borderRadius: "100%",
                                    }}
                                    alt="Header Avatar"
                                />
                            </figure>
                            <StyledUserName>
                                {user?.email ?? "Sin email"}
                            </StyledUserName>
                        </>
                    )}
                    items={[
                        {
                            text: "Item 1",                            
                        },
                        {
                            text: "Item 2",
                        },
                    ]}

                />
                {/* <Outlet/> */}
                {props.children}
            </StyledLayoutContent>
        </StyledLayoutSuperContainer>
    );
};