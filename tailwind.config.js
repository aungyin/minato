module.exports = {
  future: {},
  purge: {
    enabled: process.env.NODE_ENV === "production",
    mode: 'all',
    content: [
      'content/**/*.md',
      "components/**/*.vue",
      "layouts/**/*.vue",
      "pages/**/*.vue",
      "plugins/**/*.js",
      "nuxt.config.js"
    ]
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    require("@tailwindcss/typography")
  ],
}