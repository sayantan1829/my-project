import React, { useState, useEffect } from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { themes } from "./theme";
import { GlobalStyles } from "./global";
import AnimatedCursor from "react-animated-cursor";
import { settings } from "./portfolio";
import ReactGA from "react-ga";

function App() {
  useEffect(() => {
    if (settings.googleTrackingID) {
      ReactGA.initialize(settings.googleTrackingID, {
        testMode: process.env.NODE_ENV === "test",
      });
      ReactGA.pageview(window.location.pathname + window.location.search);
    }
  }, []);

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const useCursor = settings.useCustomCursor;

  return (
    <ThemeProvider theme={themes[theme]}>
      <>
        <GlobalStyles />
        <div>
          <AnimatedCursor
            innerSize={12}
            outerSize={30}
            color="0, 255, 70"
            outerAlpha={0.2}
            innerScale={0.7}
            outerScale={2}
          />
            <Main theme={themes[theme]} setTheme={setTheme} />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
// https://dev.to/holdmypotion/react-custom-cursor-no-extra-dependencies-25ki    to implement more attractive cursor
