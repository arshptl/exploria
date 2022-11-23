import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import UserList from '../components/UserList';


// Apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:7000',
  cache: new InMemoryCache(),
});

const Home: NextPage = () => {
  return (
    <ApolloProvider client={client}>
      <div className={styles.container}>
        <h1>{"list of Users"}</h1>
        <UserList/>
      </div>
    </ApolloProvider>
  )
}

export default Home
