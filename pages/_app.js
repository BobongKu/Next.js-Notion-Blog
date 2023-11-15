import '../styles/globals.css'
import '../styles/react-notion-x.css'
import 'prismjs/themes/prism-tomorrow.css'
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
    )
}

export default MyApp
