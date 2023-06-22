import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "../../../hooks/use-theme";
import { useState } from "react";
import { styled } from "styled-components";
import { DropdownList } from "./DropdownList";
import "./DropdownProps";

const StyledDropdownButton = styled.div`
  display: flex;
  align-items: center;        
  gap: 1rem;
  margin-right: 0;
  margin-left: auto;        
  width: fit-content;
  padding: 0.5rem;
  cursor: pointer;
  position: relative;
`;

/**
 * @param {import('./DropdownProps').DropdownButtonProps} props
 */

export const DropdownButton = (props) => {
  const {
    theme
  } = useTheme();

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <StyledDropdownButton
      onClick={toggleOpen}
      data-testid="dropdownButton"
    >
      {props.lead}
      <FontAwesomeIcon
        icon={`fa-solid ${isOpen ? 'fa-chevron-up' : "fa-chevron-down"}`}
        fontSize={"0.9rem"}
        style={{
          color: theme.primaryColor
        }}
      />
      {isOpen && (
        <DropdownList
          items={props.items}
        />
      )}
    </StyledDropdownButton>
  );
};