import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Link from 'next/link'

export default function Products(){
  return (
    <div>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!"/>
        <p className="description">
          testing
        </p>
        <Footer/>
      </main>
    </div>
  )
};
