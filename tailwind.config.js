/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#131313",

          secondary: "#C9F31D",

          accent: "#FF014F",

          neutral: "#F3F4F6",

          "base-100": "#ffffff",

          // info: "#0DCAF0",

          success: "#100028",

          info: "#00b4fc",

          // bgColor: "#E0F2FE",

          // success: "#001449",

          warning: "#FF014F",

          error: "#e58b8b",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
};
