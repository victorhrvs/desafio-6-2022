import React from 'react'
import Head from 'next/head'
import { Container } from '../styles/pages/Home'
import Header from '../components/common/Header/header'
import AgentDetail from '../components/Agents/agentdetail'


const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>
      <Header />
      <AgentDetail />

    </Container>
  )
}

export default Home