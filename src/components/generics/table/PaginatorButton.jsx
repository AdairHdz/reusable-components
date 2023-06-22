import { faChevronLeft, faChevronRight, faStepBackward, faStepForward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "../../../hooks/use-theme";
import { paginatorButtonTypes } from "./TableProps";

/**
 * 
 * @param {import('./TableProps').PaginatorButtonProps} props 
 * @returns 
 */

const PaginatorButton = (props) => {

    const {
        theme
    } = useTheme();

    let iconToBeShown;

    switch (props.paginatorButtonType) {
        case paginatorButtonTypes.FIRST_PAGE:
            iconToBeShown = faStepBackward;
            break;
        case paginatorButtonTypes.PREVIOUS_PAGE:
            iconToBeShown = faChevronLeft;
            break;
        case paginatorButtonTypes.LAST_PAGE:
            iconToBeShown = faStepForward;
            break;
        default:
            iconToBeShown = faChevronRight;
            break;
    }

    return (
        <FontAwesomeIcon
            icon={iconToBeShown}
            style={{
                cursor: props.disabled ? '' : 'pointer',
                color: theme.secondaryColor
            }}            
            onClick={ props.disabled ? undefined : props.clickHandler } />
    );
};

export default PaginatorButton;