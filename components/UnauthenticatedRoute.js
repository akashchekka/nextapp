import { useAppContext } from "../libs/contextLib"
import { useRouter } from 'next/router'

const UnauthenticatedRoute = (WrappedComponent) => {
    return (props) => {
        const { isAuthenticated } = useAppContext();
        const Router = useRouter();
        if (typeof window !== "undefined") {
            if (isAuthenticated) {
                Router.replace("/home");
                return null;
            }
            return <WrappedComponent {...props} />;
        }  
        // If we are on server, return null
        return null;
    };
};

export default UnauthenticatedRoute
