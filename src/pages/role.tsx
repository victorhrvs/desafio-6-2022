import React from 'react'
import Head from 'next/head'
import { Container } from '../styles/pages/Home'
import Header from '../components/common/Header/header'
import RolePermissions from '../components/Roles/rolepermissions'


const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>
      <Header />
      <RolePermissions />

    </Container>
  )
}

export default Home