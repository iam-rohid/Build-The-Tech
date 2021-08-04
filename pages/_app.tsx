import "tailwindcss/tailwind.css";
import "../src/styles/globals.scss";

import { AnimatePresence } from "framer-motion";
import SplashScreen from "../src/components/splash-screens";

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence>
      <SplashScreen>
        <Component {...pageProps} />
      </SplashScreen>
    </AnimatePresence>
  );
}

export default MyApp;
