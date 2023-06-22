import { useEffect, useState } from "react";
import { styled } from "styled-components";
import "./ButtonProps";
import { ButtonVariants } from "./ButtonProps";

const Button = styled.button`    
    border-radius: 0;
    padding: 0.4rem 4rem;
    font-size: 1.2rem;
    font-weight: 100;
`;

/**
 * @param {import('./ButtonProps').ThemeButtonProps} props
 * @returns 
 */

export const BaseButton = (props) => {

    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        setIsHovered(props.isHovered);
    }, [props.isHovered]);

    const determineBackground = () => {
        if (isHovered) {
            /**
             * If the button is hovered and the variant is "TEXT",
             * it should have the normal background color.
             */
            if (props.variant && props.variant === ButtonVariants.OUTLINED) {
                return props.themeConfig?.background?.color;
            }

            /**
             * If the button is hovered but its the normal variant,
             * it should have the onHover background color.
             * In case there's no onHover background color defined, it should
             * use the normal background color
             */
            return props.themeConfig?.background?.onHoverColor ?? props.themeConfig?.background?.color;
        }

        /**
         * If the button is not hovered and the variant is "TEXT",
         * it should have a transparent background
         */
        if (props.variant && props.variant === ButtonVariants.OUTLINED) {
            return "rgba(255,255,255,0)";
        }

        /**
         * If the button is not hovered and its the normal variant,
         * it should have the normal background color
        */
        return props.themeConfig?.background?.color;

    };

    const determineForeground = () => {
        /**
         * isHovered ? props.themeConfig?.text?.onHoverColor : props.themeConfig?.text?.color
         */

        if (isHovered) {
            /**
            * If the button is hovered and it has the "TEXT" variant,
            * the foreground color should be the normal color.
            */
            if (props.variant && props.variant === ButtonVariants.OUTLINED) {
                return props.themeConfig?.text?.color;
            }
            /**
            * If the button is hovered and it has the normal variant,
            * the foreground color should be the onBackground color.
            */
            return props.themeConfig?.text?.onHoverColor;
        }

        /**
         * If the button is not hovered and it has the text variant,
         * the foreground should be the background color
         */
        if (props.variant && props.variant === ButtonVariants.OUTLINED) {
            return props.themeConfig?.background?.color;
        }

        /**
         * If the button is not hovered and it has the normal variant,
         * the foreground should be the normal text color
         */
        return props.themeConfig?.text?.color;
    };

    return (
        <Button
            {...props}
            data-testid="themeButton"
            onMouseOver={() => {
                if (!props.isHovered) {
                    setIsHovered(true);
                }
            }}
            onMouseLeave={() => {
                if (!props.isHovered) {
                    setIsHovered(false);
                }
            }}
            style={{
                backgroundColor: determineBackground(),
                color: determineForeground(),
                border: `1px solid ${isHovered ? props.themeConfig?.border?.onHoverColor : props.themeConfig?.border?.color}`,
                cursor: "pointer",
                ...props.style,
            }}
        >
            {props.children}
        </Button>
    );
};