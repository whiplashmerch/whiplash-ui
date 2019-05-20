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
    title: 'Branding',
    pages: [
      {
        path: '/branding/logos/',
        title: 'Logos',
        content: pageLoader(() => import("./pages/branding/LOGOS.md"))
      },
      {
        path: '/branding/colors/',
        title: 'Colors',
        content: pageLoader(() => import("./pages/branding/COLORS.md"))
      },
      {
        path: '/branding/type/',
        title: 'Type',
        content: pageLoader(() => import("./pages/branding/TYPE.md"))
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
        path: '/forms/loading-indicator/',
        title: 'Loading Indicator',
        content: pageLoader(() => import("./pages/forms/LOADINGINDICATOR.md"))
      },
      {
        path: '/forms/select-input/',
        title: 'Select Input',
        content: pageLoader(() => import("./pages/forms/SELECTINPUT.md"))
      },
      {
        path: '/forms/toggle/',
        title: 'Toggle',
        content: pageLoader(() => import("./pages/forms/TOGGLE.md"))
      },
      {
        path: '/forms/dropdown/',
        title: 'Dropdown',
        content: pageLoader(() => import("./pages/forms/DROPDOWN.md"))
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
    title="UI Library 2.0.0" 
    pages={pages} 
    logoSrc="./logo-vertical.png"
    theme={whiplashTheme}
    //basePath='/whiplash-ui/'
  />,
  document.getElementById("catalog")
);
