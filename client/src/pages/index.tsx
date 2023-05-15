import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import UserList from '../components/UserList';
import LandingPage from '@/components/LandingPage';


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main>
        <LandingPage />
      </main>
      {/* <h1>{"list of Users"}</h1> */}
      {/* <UserList /> */}
    </div>
  )
}

export default Home
