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

          accent: "#09072D",

          neutral: "#231E78",

          "base-100": "#ffffff",

          info: "#0DCAF0",

          success: "#100028",

          warning: "#FF6D5A",

          error: "#e58b8b",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
};
