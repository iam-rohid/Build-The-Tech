export interface iMenuItem {
  name: string;
  path: string;
  subMenu?: iMenuItem[];
}

export const menu: iMenuItem[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Services",
    path: "/services",
    subMenu: [
      // {
      //   name: "Mobile App",
      //   path: "/services/mobile-app",
      // },
      {
        name: "Website",
        path: "/services/website",
      },
      {
        name: "Web application",
        path: "/services/web",
      },
      // {
      //   name: "Wordpress",
      //   path: "/services/wordpress",
      // },
    ],
  },
  {
    name: "Blog",
    path: "/blog",
  },
  {
    name: "About Us",
    path: "/about",
  },
  {
    name: "Contact Us",
    path: "/contact",
  },
];
