import '../styles/globals.css'
import Nav from './files/nav'
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
  
  return(
  <>
  <Head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"/>
  </Head>
  <Nav/>
  <Component {...pageProps} />
  </>
  )
}

export default MyApp
