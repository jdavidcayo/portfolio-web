import Head from 'next/head'
import 'bootswatch/dist/cosmo/bootstrap.min.css'
import 'animate.css/animate.min.css'
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
