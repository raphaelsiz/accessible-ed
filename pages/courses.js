import Head from 'next/head'
import CourseNav from '@components/CourseNav'
import Footer from '@components/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <CourseNav />
      </main>

      <Footer />
    </div>
  )
};
