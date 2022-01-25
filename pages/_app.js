import '../styles/globals.css'
import Head from 'next/head'

function MyApp ({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel='preload'
          href='/fonts/Bangers-Regular.ttf'
          as='font'
          crossOrigin=''
        />
        <link
          rel='preload'
          href='/fonts/MrDafoe-Regular.ttf'
          as='font'
          crossOrigin=''
        />
        <link
          rel='preload'
          href='/fonts/Lato-Bold.ttf'
          as='font'
          crossOrigin=''
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0,width=100'
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
