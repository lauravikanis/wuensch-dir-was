import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

*,*::before,*::after{
  box-sizing:border-box
}
body {
  margin: 0;
  font-family: 'Roboto', sans-serif;
  background-color: #105e62;
  /* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
  'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
  'Helvetica Neue', sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
    */
 }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
a {
  color: #b5525c;
  text-decoration: none;
}
h1, h2, h3, h4, h5, h6 {
  font-family: 'Great Vibes', cursive;

}

h1 {  font-size: 2.5rem;
}

h2{
  font-size: 2rem;
  margin-block-end:0.5rem;
}
main {
display: flex;
flex-direction:column;
margin: 1rem auto;
padding: 2rem;
max-width: 80%;
background-color: whitesmoke;
border-radius: 35px;

}

  `;

export default GlobalStyle;
