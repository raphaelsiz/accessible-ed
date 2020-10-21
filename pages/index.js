import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import CourseNav from '@components/CourseNav'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header title="Welcome to my app!" />
        <CourseNav/>
        <div className="page">
          <h1>What the fuckkkkkkkkkkkkkkkkkkkkkkkkkkk</h1>
        </div>
      </main>
      <Footer />
      <style jsx>{`
        .page {
          margin-top: 60px;
          display: flex;	
          flex-direction: column;	
          justify-content: center;
          //color: red;
        }
      `}</style>
    </div>
  )
}
