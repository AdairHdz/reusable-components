import {useTheme} from "../../../hooks/use-theme";
import { BaseButton } from "./BaseButton";

export const SecondaryButton = (props) => {
    const {
        theme
    } = useTheme();

    return (
        <BaseButton            
            themeConfig={{
                background: {
                    color: theme.secondaryColor,
                    onHoverColor: theme.secondaryVariantColor,
                },
                text: {
                    color: theme.onSecondary,
                    onHoverColor: theme.onSecondary
                },
                border: {
                    color: theme.secondaryColor,
                    onHoverColor: theme.secondaryVariantColor
                }
            }}
            variant={props.variant}
        >
            {props.children}
        </BaseButton>
    )
};