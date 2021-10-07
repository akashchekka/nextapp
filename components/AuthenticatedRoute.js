import { useAppContext } from "../libs/contextLib"
import { useRouter } from "next/router";

const AuthenticatedRoute = (WrappedComponent) => {
    return (props) => {
        const { isAuthenticated } = useAppContext();
        console.log("PropsData2:", props.data)
        const Router = useRouter();
        if (typeof window !== "undefined") {
            if (!isAuthenticated) {
                Router.push("/login");
                return null;
            }
            return <WrappedComponent {...props} />;
        }
        // If we are on server, return null
        return null;
    };
};

export default AuthenticatedRoute;
