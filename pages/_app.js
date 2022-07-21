import "../styles/globals.css";
import WordContext from "../context/words";

function MyApp({ Component, pageProps }) {
  return (
    <WordContext>
      <Component {...pageProps} />
    </WordContext>
  );
}

export default MyApp;
