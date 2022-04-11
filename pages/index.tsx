import type { NextPage } from 'next'
import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Words Box</title>
        <meta name="description" content="Learn new Words" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Learn new Words</h1>
        <p>Learning new words every day is easy</p>

        <form action="">
          <input type="text" id="word" placeholder="enter new word" />

          <button type="submit">Add word</button>
        </form>
      </main>

      <footer>
        footer
        {/* <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a> */}
      </footer>
    </div>
  )
}

export default Home
