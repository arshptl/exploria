import { AuthGate } from '@/config/authGate';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { CookiesProvider } from "react-cookie";
import { useAppApolloClient } from "../config/apolloClient";
import { ApolloProvider } from '@apollo/client';
import Layout from '@/components/Layout/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useAppApolloClient();
  return <CookiesProvider>
    <ApolloProvider client={apolloClient}>
      <AuthGate>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthGate>
    </ApolloProvider>
  </CookiesProvider>
}

export default MyApp
