import {Navigate} from "react-router-dom";
import { Layout } from "../components/layout/Layout";
import { useAuth } from "../hooks/use-auth";

/**
 * @typedef AuthRouterProps
 * @property {JSX.Element} children
 * @property {Array<string>} roles
 */

/**
 * 
 * @param {AuthRouterProps} props 
 */
export const AuthRouter = (props) => {
    const {
        user
    } = useAuth();

    const userHasAccessPermissions = (roles) => {                
        if(!roles?.length) {
            return false;
        }

        let hasPermissions = false;

        for(const role of roles) {
            console.log(user?.roles)
            if(user?.roles?.includes(role)) {
                hasPermissions =  true;
                break;
            }            
        }
        return hasPermissions;
    };

    if (!userHasAccessPermissions(props.roles)) {
        return <Navigate to="/login" replace />;
    }
    return <Layout> {props.children} </Layout>;
};