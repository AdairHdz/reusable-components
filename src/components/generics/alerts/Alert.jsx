import { useTheme } from "../../../hooks/use-theme";

/**
 * @typedef ThemeAlertProps
 * @property {number} status
 * @property {string} message
 */

/**
 * 
 * @param {ThemeAlertProps} props 
 * @returns 
 */

export const Alert = (props) => {

    const {
        theme
    } = useTheme();

    return (
        <div
            data-testid="themeAlert"
            style={{
                backgroundColor: (props.status > 199 && props.status < 300) ? theme.primaryColor : theme.error,
                color: (props.status > 199 && props.status < 300) ? theme.onPrimary : theme.onError,
                border: "none",
                padding: "1rem"
            }}
        >
            {props.message}
        </div>
    );
};