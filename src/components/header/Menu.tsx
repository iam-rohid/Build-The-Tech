import React, { useEffect, useState } from "react";
import MenuItem from "./MenuItem";
import { useRouter } from "next/router";
import { menu } from "../../data/navigation";

const Menu = () => {
  const [currentRoute, setCurrentRoute] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      const newRoute: string = url.split("/")[1];
      if (newRoute !== null && currentRoute === newRoute) {
        if (scrollY == 0) {
          router.reload();
        }
      } else {
        setCurrentRoute(newRoute);
      }
    };

    if (currentRoute === null) {
      handleRouteChange(router.asPath);
    }

    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [currentRoute, setCurrentRoute, router]);

  return (
    <ul className="flex flex-row items-center space-x-4">
      {menu.map((item, i) => (
        <MenuItem
          key={i}
          data={item}
          isActive={item.path.split("/")[1] === currentRoute}
        />
      ))}
    </ul>
  );
};

export default Menu;
