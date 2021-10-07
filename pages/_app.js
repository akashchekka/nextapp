import {useState, useEffect} from 'react'
import '../styles/globals.css'
import Amplify, { Auth } from 'aws-amplify'
import config from '../src/aws-exports'
import Link from 'next/link'
import {css} from '@emotion/css'
import { AppContext } from "../libs/contextLib";

Amplify.configure({
  ...config,
  ssr: true
})

export default function MyApp({ Component, pageProps }) {
  const data = "Dataaa"
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const additionalProps = {
    data,
    isAuthenticated,
    ...pageProps
  }

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then(() => {
        setIsAuthenticated(true)
      })
      .catch(err => setIsAuthenticated(false))
  }, [])

  console.log('Auth: ', isAuthenticated)
  return (
    <div>
      <nav className={navStyle}>
        <Link href="/">
          <span className={linkStyle}>About</span>
        </Link>
        <Link href="/home">
          <span className={linkStyle}>Home</span>
        </Link>
        {
          !isAuthenticated &&
          <Link href="/login">
            <span className={linkStyle}>Login</span>
          </Link>
        }
        {/* <Link href="/protected">
          <span className={linkStyle}>Protected route</span>
        </Link>
        <Link href="/protected-client-route">
          <span className={linkStyle}>Protected client route</span>
        </Link> */}
      </nav>
      <AppContext.Provider value={{
        // data,
        isAuthenticated,
        setIsAuthenticated
      }}>
        <Component {...additionalProps} />
      </AppContext.Provider>
    </div>
  )
}

const linkStyle = css`
  margin-right: 20px;
  cursor: pointer;
`

const navStyle = css`
  float: right;
  margin-top: 10px;
`