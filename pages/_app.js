import Head from 'next/head'
import 'bootswatch/dist/cosmo/bootstrap.min.css'
import '../public/css/styles.css'

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <title>Mi portfolio</title>
      </Head>
      <Component {...pageProps} />
    </>
  )

}

export default MyApp
