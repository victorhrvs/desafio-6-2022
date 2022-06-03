import React from 'react'
import Head from 'next/head'
import { Container } from '../styles/pages/Home'
import Header from '../components/common/Header/header'
import Agents from '../components/Agents/agents'
import Roles from '../components/Roles/roles'
import api from '../api/api'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>
      <Header />
      <Agents />
      <Roles />
    </Container>
  )
}

export default Home
