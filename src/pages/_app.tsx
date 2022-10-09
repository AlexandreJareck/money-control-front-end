import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { Modal } from '../../components-ui/modal'
import GlobalStyles from '../styles/global.styles'
import { theme } from '../styles/theme.styles'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Modal>EAEAEEAEE</Modal>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
