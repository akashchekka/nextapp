import AuthenticatedRoute from "../components/AuthenticatedRoute";
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import { useAppContext } from "../libs/contextLib";

function Home(props) {
    const { setIsAuthenticated } = useAppContext();
    return (
        <div>
            <h1>Homeee!!!</h1>
            <AmplifySignOut style={{
                width: 400
            }} onClick={() => {
                setIsAuthenticated(false)
            }}/>
        </div>
    )
}

export default AuthenticatedRoute(Home);
