import '../styles/globals.css'
import '../styles/react-notion-x.css'
import '../styles/prism-one-dark.css'
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from 'next-themes'
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <NextNProgress color="#F1EB90" startPosition={0.3} stopDelayMs={200} height={6} />
      <Component {...pageProps} />
    </ThemeProvider>
    )
}

export default MyApp
