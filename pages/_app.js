import { useEffect } from "react";
import Layout from "./components/Layout";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // perform any additional setup for the app here
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
