import "tailwindcss/tailwind.css";
import "../src/styles/globals.scss";

import MainHeader from "../src/components/header/main-header";
import MainFooter from "../src/components/main-footer";

function MyApp({ Component, pageProps }) {
  return (
    <div className="overflow-x-hidden overflow-y-auto w-screen h-screen">
      <MainHeader />
      <main>
        <Component {...pageProps} />
      </main>
      {/* <MainFooter /> */}
    </div>
  );
}

export default MyApp;
