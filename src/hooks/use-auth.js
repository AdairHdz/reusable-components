import { useContext, useEffect, useState } from "react";
import { AuthContext, authenticatedUserDefaultValues } from "../context/AuthContext";

export const useAuth = () => {
    const authContext = useContext(AuthContext);
    

    const [user, setUser] = useState(authenticatedUserDefaultValues?.authenticatedUser);
    
    useEffect(() => {        
        setUser({
            id: authContext?.authenticatedUser?.id,
            email: authContext?.authenticatedUser?.email,
            token: authContext?.authenticatedUser?.token,
            roles: authContext?.authenticatedUser?.roles
        });
    }, []);

    return {
        user
    };
    
};