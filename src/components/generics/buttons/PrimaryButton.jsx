import {useTheme} from "../../../hooks/use-theme";
import { BaseButton } from "./BaseButton";
import "./ButtonProps";

/**
 * 
 * @param {import('./ButtonProps').VariantButtonProps} props 
 * @returns 
 */
export const PrimaryButton = (props) => {
    const {
        theme
    } = useTheme();

    return (
        <BaseButton            
            themeConfig={{
                background: {
                    color: theme.primaryColor,
                    onHoverColor: theme.primaryVariantColor,
                },
                text: {
                    color: theme.onPrimary,
                    onHoverColor: theme.onPrimary
                },
                border: {
                    color: theme.primaryColor,
                    onHoverColor: theme.primaryVariantColor
                }
            }}
            variant={props.variant}
            className={props.className}
            style={props.style}
        >
            {props.children}
        </BaseButton>
    )
};