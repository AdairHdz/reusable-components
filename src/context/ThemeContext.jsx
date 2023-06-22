import { createContext, useEffect, useState } from "react";
import { useFetch } from "../hooks/use-fetch";
import { Spinner } from "reactstrap";
import {useAuth} from "../hooks/use-auth";
export const COLOR_HIERARCHY = {
    PRIMARY: 1,
    SECONDARY: 2,
    TERTIARY: 3,
    PRIMARY_VARIANT: 4,
    SECONDARY_VARIANT: 5,
    TERTIARY_VARIANT: 6
};

export const VARIANT = {
    FILLED: 1,
    OUTLINED: 2,
};

/**
 * @typedef Theme
 * @property {string} primaryColor
 * @property {string} secondaryColor
 * @property {string} tertiaryColor 
 * @property {string} primaryVariantColor
 * @property {string} secondaryVariantColor
 * @property {string} tertiaryVariantColor 
 * @property {string} backgroundColor
 * @property {string} surface
 * @property {string} error
 * @property {string} onPrimary
 * @property {string} onSecondary
 * @property {string} onTertiary
 * @property {string} onBackground
 * @property {string} onSurface
 * @property {string} onError
 */

/**
 * @typedef ThemeSettings 
 * @property {Theme} theme
 * @property {(color: string, hierarchy: number) => void} setColor - Hirarchy refers to the constant
 * @property {(newTheme: Theme) => void} setTheme 
 * values defined in the ThemeContext.jsx file. It can have one of these three values: primary, secondary or tertiary
 */

/**
 * @type {ThemeSettings}
 */


export const DEFAULT_VALUES = {
    theme: {
        primaryColor: "#3C3744",
        primaryVariantColor: "#2A0800",
        secondaryColor: "#090C9B",
        secondaryVariantColor: "#3D52D5",
        tertiaryColor: "#B4C5E4",
        tertiaryVariantColor: "#BEA8A7",
        backgroundColor: "#FFFFFF",
        surface: "#FFFFFF",
        error: "#B00020",
        onPrimary: "#FFFFFF",
        onSecondary: "#FFFFFF",
        onTertiary: "#FFFFFF",
        onBackground: "#000000",
        onSurface: "#000000",
        onError: "#FFFFFF"
    },
    setColor: (color, hierarchy) => { },
    setTheme: (newTheme) => { }
};


export const ThemeContext = createContext({
    primaryColor: "#3C3744",
    primaryVariantColor: "#2A0800",
    secondaryColor: "#090C9B",
    secondaryVariantColor: "#3D52D5",
    tertiaryColor: "#B4C5E4",
    tertiaryVariantColor: "#BEA8A7",
    backgroundColor: "#FFFFFF",
    surface: "#FFFFFF",
    error: "#B00020",
    onPrimary: "#FFFFFF",
    onSecondary: "#FFFFFF",
    onTertiary: "#FFFFFF",
    onBackground: "#000000",
    onSurface: "#000000",
    onError: "#FFFFFF"
});

/**
 * @typedef AuthContextProviderProps
 * @property {JSX.Element} children
 * @property {import('../hooks/use-fetch').RestServiceRequester} themeFetcher
 */

/**
 * @param {AuthContextProviderProps} props
 */
export const ThemeContextProvider = (props) => {



    /**
     * @type {Theme}
     */
    const userTheme = { ...DEFAULT_VALUES.theme };

    const [theme, setTheme] = useState(userTheme);

    const {
        data,
        getData,
        status,
        isLoading
    } = useFetch(props.themeFetcher);

    const {
        user
    } = useAuth();

    useEffect(() => {
        getData(`themes/${user?.themeId}`);
    }, []);

    useEffect(() => {
        if (data && status === 200) {
            setTheme(data);
            localStorage.setItem("theme", JSON.stringify(data));
        }
    }, [data, status]);

    const setColor = (color, hierarchy) => {
        switch (hierarchy) {
            case COLOR_HIERARCHY.PRIMARY:
                setTheme(prevData => {
                    return {
                        ...prevData,
                        primaryColor: color
                    };
                });
                break;
            case COLOR_HIERARCHY.SECONDARY:
                setTheme(prevData => {
                    return {
                        ...prevData,
                        secondaryColor: color
                    };
                });
                break;
        }
        setTheme(prevData => {
            return {
                ...prevData,
                tertiaryColor: color
            };
        });
    };

    /**
     * @type {ThemeSettings}
     */
    const contextValues = {
        setColor,
        theme,
        setTheme
    };

    return (
        <ThemeContext.Provider value={contextValues}>
            {isLoading ? (
                <div className="d-flex justify-content-center align-items-center" style={{
                    height: "100vh"
                }}>
                    <Spinner />
                </div>
            ) : (
                <>
                    {props.children}
                </>
            )}
        </ThemeContext.Provider>
    );
};