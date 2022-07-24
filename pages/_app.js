import "../styles/globals.css";
import WordContext from "../context/words";
import PointsContext from "../context/points";
import TimerContext from "../context/time";

function MyApp({ Component, pageProps }) {
  return (
    <TimerContext>
      <PointsContext>
        <WordContext>
          <Component {...pageProps} />
        </WordContext>
      </PointsContext>
    </TimerContext>
  );
}

export default MyApp;
