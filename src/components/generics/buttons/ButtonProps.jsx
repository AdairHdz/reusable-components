/**
 * @typedef ButtonThemeConfig
 * @property {Object} background
 * @property {string} background.color
 * @property {string} background.onHoverColor
 * @property {Object} text
 * @property {string} text.color
 * @property {string} text.onHoverColor
 * @property {Object} border
 * @property {string} border.color
 * @property {string} border.onHoverColor
 */

/**
 * @typedef ThemeButtonProps 
 * @property {string} className 
 * @property {Object} style
 * @property {JSX.Element} children
 * @property {ButtonThemeConfig} themeConfig
 * @property {boolean?} isHovered
 * @property {number} variant - Possible values:
 * OUTLINED, REGULAR
 */

export const ButtonVariants = {
    OUTLINED: 1,
    REGULAR: 2
};

/**
 * @typedef VariantButtonProps
 * @property {string} className 
 * @property {Object} style
 * @property {number} variant - Possible values:
 * OUTLINED, REGULAR
 */

export const ButtonProps = {};