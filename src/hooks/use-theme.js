import { useContext, useEffect, useState } from "react";
import { COLOR_HIERARCHY, DEFAULT_VALUES, ThemeContext, VARIANT } from "../context/ThemeContext";

export const useTheme = () => {
    const themeContext = useContext(ThemeContext);
    const [theme, setTheme] = useState(DEFAULT_VALUES.theme);

    const loadTheme = () => {        
        setTheme({
            ...themeContext.theme
        });
    };

    useEffect(() => {
        loadTheme();
    }, [themeContext.theme]);

    /**
     * @param {string} color
     * @param {number} colorHierarchy
     */
    const setColor = (color, colorHierarchy) => {
        themeContext.setColor(color, colorHierarchy);
    };
    

    return {
        theme,
        refreshTheme: (newTheme) => {            
            themeContext.setTheme(newTheme);
        },
        setColor
    };
};