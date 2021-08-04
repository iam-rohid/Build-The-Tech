import React, { useEffect, useState } from "react";
import Layout from "../layout";
import Screen from "./Screen";

interface iProp {
  children: JSX.Element;
  duration?: number;
}
const SplashScreen: React.FC<iProp> = ({ children, duration }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, duration | 1000);
    return () => {};
  }, [duration]);

  return <>{loading ? <Screen /> : <Layout>{children}</Layout>}</>;
};

export default SplashScreen;
