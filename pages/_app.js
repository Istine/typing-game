import "../styles/globals.css";
import GlobalContext from "../context";

function MyApp({ Component, pageProps }) {
  return (
    <GlobalContext>
      <Component {...pageProps} />
    </GlobalContext>
  );
}

export default MyApp;
