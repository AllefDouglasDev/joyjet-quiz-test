import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  #root {
    margin: 0 auto;
  } 

  button {
    font-family: 'Arial', sans-serif;
  }
`
