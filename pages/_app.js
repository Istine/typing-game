import "../styles/globals.css";
import WordContext from "../context/words";
import PointsContext from "../context/points";

function MyApp({ Component, pageProps }) {
  return (
    <PointsContext>
      <WordContext>
        <Component {...pageProps} />
      </WordContext>
    </PointsContext>
  );
}

export default MyApp;
