import React from 'react'
import Head from 'next/head'
import { Container } from '../styles/components/common/pages'
import Header from '../components/common/Header/header'
import RolePermissions from '../components/Roles/rolepermissions'

function Role(): JSX.Element {
  return (
    <Container>
      <Head>
        <title>Permissões</title>
      </Head>
      <Header />
      <div className="main">
        <div className="voltar">
          <a href="/">
            <img src="./voltar.png" width={36} height={36} />
          </a>
          <h1 className="voltah1">Permissões</h1>
        </div>
      </div>
      <div className="card">
        <RolePermissions />
      </div>
    </Container>
  )
}

export default Role
