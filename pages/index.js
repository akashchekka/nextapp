import Link from 'next/link'
import AuthenticatedRoute from '../components/AuthenticatedRoute'
import styles from '../styles/Home.module.css'

function Index() {
  return (
    <div className={styles.container}>
      {/* <Link href="/test">
        <button>
          click
        </button>
      </Link>       */}
      <h3>
        Index
      </h3>
    </div>
  )
}

export default AuthenticatedRoute(Index)