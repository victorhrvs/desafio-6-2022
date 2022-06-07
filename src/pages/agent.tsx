import React from 'react'
import Head from 'next/head'
import { Container } from '../styles/components/common/pages'
import Header from '../components/common/Header/header'
import AgentDetail from '../components/Agents/agentdetail'

function Agent(): JSX.Element {
  return (
    <Container>
      <Head>
        <title>Detalhes do colaborador</title>
      </Head>
      <Header />
      <div className="main colab">
        <div className="voltar">
          <a href="/">
            <img src="./voltar.png" width={36} height={36} />
          </a>
          <h1 className="voltah1">Detalhes do colaborador</h1>
        </div>

        <div className="card colab card-details">
          <AgentDetail />
        </div>
      </div>
    </Container>
  )
}

export default Agent
