import { useState, useEffect } from 'react'
import { Auth } from 'aws-amplify'
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import { useAppContext } from "../libs/contextLib";
import UnauthenticatedRoute from '../components/UnauthenticatedRoute';

function Login() {
  const { data, setIsAuthenticated } = useAppContext();
  const [user, setUser] = useState(null)
  useEffect(() => {
    // Access the user session on the client
    Auth.currentAuthenticatedUser()
      .then(user => {
        console.log("User: ", user)
        setUser(user)
        setIsAuthenticated(true)
      })
      .catch(err => setUser(null))
  }, [])
  return (
    <div>
      { user && <h1>Welcome, {user.username}: {data}</h1> }
    </div>
  )
}

export default withAuthenticator(UnauthenticatedRoute(Login))