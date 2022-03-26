import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
   :root {
      --accent: hsl(54, 100%, 55%);
      --text: hsl(187, 13%, 86%);
      --bg: hsl(227, 16%, 9%);
      --base-font: -apple-system, BlinkMacSystem, Arial, Helvetica, sans-serif;
   }

   *, *::before, *::after {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
   }

   html, body {
      box-sizing: border-box;
      font-size: 62.5%;
      overflow: hidden;
   }

   h1, h2, h3, h4, h5, h6 {
      font-size: 100%;
      font-weight: normal
   }

   ul {
      list-style: none;
   }

   img, video {
      height: auto;
      max-width: 100%;
   }

   iframe {
      border: 0;
   }

   table {
      border-collapse: collapse;
      border-spacing: 0;
   }

   a {
      color: var(--text);
      text-decoration: none;
   }
`

export default GlobalStyle
