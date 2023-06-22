import {useTheme} from "../../../hooks/use-theme";
import { BaseButton } from "./BaseButton";

export const TertiaryButton = (props) => {
    const {
        theme
    } = useTheme();

    return (
        <BaseButton            
            themeConfig={{
                background: {
                    color: theme.tertiaryColor,
                    onHoverColor: theme.tertiaryVariantColor,
                },
                text: {
                    color: theme.onTertiary,
                    onHoverColor: theme.onTertiary
                },
                border: {
                    color: theme.tertiaryColor,
                    onHoverColor: theme.tertiaryVariantColor
                }
            }}
            variant={props.variant}
        >
            {props.children}
        </BaseButton>
    )
};