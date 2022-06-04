import React from 'react'
import Head from 'next/head'
import { Container } from '../styles/pages/Home'
import Header from '../components/common/Header/header'
import Agents from '../components/Agents/agents'
import Roles from '../components/Roles/roles'
import api from '../api/api'
import Card from '../components/common/Card/card'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>
      <Header />
      <div className='main'>
        <div className="card">
          <Agents />
          <Roles />
        </div>
      </div>
    </Container>
  )
}

export default Home
