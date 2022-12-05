import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import UserList from "../components/UserList";
import cors from "cors";

// Apollo client setup
const client = new ApolloClient({
  uri: "https://878c-2401-4900-1f3e-6222-8c7b-64fc-3296-c09c.in.ngrok.io/pg/graphql",
  cache: new InMemoryCache(),
});

const Home: NextPage = () => {
  console.log(client);

  return (
    <ApolloProvider client={client}>
      <div className={styles.container}>
        <h1>{"list of Users"}</h1>
        <UserList />
      </div>
    </ApolloProvider>
  );
};

export default Home;
