import { useEffect, useState } from "react";
import { createContext } from "react";
import React from "react";
import { useFetch } from "../hooks/use-fetch";

// Types definitions ----------------------

/**
 * @typedef AuthenticatedUser 
 * @property {number} id
 * @property {string} token
 * @property {string} email
 * @property {Array<string>} roles
 * @property {number} themeId
 */

/**
 * @typedef AuthContextValues 
 * @property {AuthenticatedUser} authenticatedUser
 * @property {(responseBody: AuthenticatedUser) => void} login
 * @property {() => void} logout
 * @property {() => boolean} isLoggedIn
 */



/**
 * @typedef AuthContextProviderProps
 * @property {JSX.Element} children
 * @property {import('../hooks/use-fetch').RestServiceRequester} restServiceRequester
 */

// Code ----------------------

/**
 * @type {AuthContextValues}
 * These default values are only used if React is not able to retrieve the real context data for any reason.
 */
export const authenticatedUserDefaultValues = {    
    authenticatedUser: {
        id: null,
        token: null,
        email: null,
        roles: ["Administrador"],
        themeId: null,
    },
    login: (responseBody) => {},
    logout: () => {},
    isLoggedIn: () => false,
};

export const AuthContext = createContext(authenticatedUserDefaultValues);

/**
 * @type {AuthenticatedUser}
 * These default values are set only with the purpose of letting the useState hook know the type of the object
 * it will store, enabling code autocompletion and lintering.
 */
const defaultAuthenticatedUser = {
    id: null,
    email: null,
    token: null,
    roles: ["Administrador"],
    themeId: null,
};

/**
 * @param {AuthContextProviderProps} props
 */
export const AuthContextProvider = (props) => {
    
    const [authenticatedUser, setAuthenticatedUser] = useState(defaultAuthenticatedUser);
    

    /**
     * @function login - This function is passed the server response for the login request.
     * @param {AuthenticatedUser} responseBody
     * @returns {void}
     */
    const login = (responseBody) => {
        setAuthenticatedUser(responseBody);
    };

    /**
     * @function logout - This function clears the in-memory authtenticated user data     
     * @returns {void}
     */
    const logout = () => {
        setAuthenticatedUser({
            email: null,
            id: null,
            token: null,
            roles: ["Administrador"],
            themeId: null,
        });
    };

    /**
     * @function isLoggedIn
     * @returns {boolean}
     */
    const isLoggedIn = () => {
        return authenticatedUser?.id !== null;
    };

    /**
     * @type {AuthContextValues}
     */
    const authContextValues = {
        authenticatedUser,
        login,
        logout,
        isLoggedIn,
    };

    return (
        <AuthContext.Provider value={authContextValues}>
            {props.children}
        </AuthContext.Provider>
    );
};