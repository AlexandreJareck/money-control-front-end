import {
  createGlobalStyle,
  css,
  DefaultTheme,
  GlobalStyleComponent
} from 'styled-components'

type GlobalStylesProps = {
  theme?: DefaultTheme
}

const GlobalStyles: GlobalStyleComponent<
  GlobalStylesProps,
  DefaultTheme
> = createGlobalStyle`
    
    @font-face {
      font-family: 'Roboto';
      font-style: regular;
      font-weight: 400;
      font-display: swap;
      src: local(''),
      
           url('../fonts/Roboto-Regular.ttf') format('ttf'),
    }
    @font-face {
      font-family: 'Roboto';
      font-style: bold;
      font-weight: 700;
      font-display: swap;
      src: local(''),
           url('../fonts/Roboto-Bold.ttf') format('ttf'),
    }  
    
      ${({ theme }) => css`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;

          :focus {
            outline: 0;
            box-shadow: 0 0 2px ${theme['green-500']};
          }
        }
        body {
          background-color: ${theme['gray-800']};
          color: ${theme['gray-100']};
          -webkit-font-smoothing: antialiased;
        }

        body,
        input,
        textarea,
        h1,
        button {
          font: 400 10rem Roboto, sans-serif;
        }

        button {
          cursor: pointer;
        }
        a {
          color: inherit;
          text-decoration: none;
        }
      `}
    `

export default GlobalStyles
