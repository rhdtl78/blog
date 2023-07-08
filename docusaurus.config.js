// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Jeonghun Kong's Devlog",
  tagline: "",
  url: "https://rhdtl78.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "rhdtl78", // Usually your GitHub org/user name.
  projectName: "rhdtl78.github.io", // Usually your repo name.
  trailingSlash: false,
  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: false,
        blog: {
          path: "./study",
          routeBasePath: "/",
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://rhdtl78.github.io",
          postsPerPage: "ALL",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  plugins: [
    "plugin-image-zoom",
    [
      "@docusaurus/plugin-content-blog",
      {
        /**
         * Required for any multi-instance plugin
         */
        id: "blog",
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: "/blog",
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: "./blog",
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      zoomSelector: ".markdown img",
      navbar: {
        title: "Devlog",
        logo: {
          alt: "Devlog Logo",
          src: "https://github.com/rhdtl78.png",
        },
        items: [
          { to: "blog", label: "Blog", position: "left" },
          { to: "cv", label: "CV", position: "left" },
          {
            href: "https://github.com/rhdtl78",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        copyright: `Copyright © ${new Date().getFullYear()} Jeonghun Kong. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
