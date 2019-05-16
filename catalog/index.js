import React from "react";
import ReactDOM from "react-dom";
import { Catalog, pageLoader } from "catalog";

const pages = [
  {
    path: "/",
    title: "Welcome",
    content: pageLoader(() => import("./pages/WELCOME.md"))
  },
  {
    title: 'Brand',
    pages: [
      {
        path: '/brand/logos/',
        title: 'Logos',
        content: pageLoader(() => import("./pages/basics/LOGOS.md"))
      },
      {
        path: '/brand/colors/',
        title: 'Colors',
        content: pageLoader(() => import("./pages/basics/COLORS.md"))
      },
      {
        path: '/brand/type/',
        title: 'Type',
        content: pageLoader(() => import("./pages/basics/TYPE.md"))
      },
    ]
  },
  {
    path: '/layout/',
    title: 'Layout',
    content: pageLoader(() => import("./pages/LAYOUT.md"))
  },
  {
    path: "/buttons/",
    title: "Buttons",
    content: pageLoader(() => import("./pages/BUTTONS.md"))
  },
  {
    path: "/tables/",
    title: "Tables",
    content: pageLoader(() => import("./pages/TABLES.md"))
  },
  {
    title: 'Forms',
    pages: [
      {
        path: '/forms/',
        title: 'DatePicker',
        content: pageLoader(() => import("./pages/forms/DATEPICKER.md"))
      },
    ]
  },
];

let whiplashTheme = {
  brandColor: "#000",
  pageHeadingBackground: "#000",
  linkColor: "#3F00B6",
  sidebarColorText: "#3F00B6",
  sidebarColorTextActive: "#EE2C8D",
};

ReactDOM.render(
  <Catalog 
    title="UI Library 2.0" 
    pages={pages} 
    logoSrc="/logo-vertical.png"
    theme={whiplashTheme}
    
  />,
  document.getElementById("catalog")
);
