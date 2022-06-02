import React from 'react'
import Head from 'next/head'

import { Container } from '../styles/pages/Home'
import Header from '../components/common/Header/header'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>
      <Header />

      <h1>h1 Title</h1>
      <p>A ReactJS + Next.js structure.</p>
    </Container>
  )
}

export default Home
