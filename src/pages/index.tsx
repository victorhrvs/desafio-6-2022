import React, { useState } from 'react'
import Head from 'next/head'
import { Container } from '../styles/components/common/pages'
import Header from '../components/common/Header/header'
import Agents from '../components/Agents/agents'
import Roles from '../components/Roles/roles'

function Home(): JSX.Element {
  const [isActiveBnt1, setActiveBnt1] = useState(true)
  const [isActiveBnt2, setActiveBnt2] = useState(false)

  const handleClick1 = () => {
    document.getElementById('tab-1').style.display = 'flex'
    document.getElementById('tab-2').style.display = 'none'
    setActiveBnt1(true)
    setActiveBnt2(false)
  }
  const handleClick2 = () => {
    document.getElementById('tab-1').style.display = 'none'
    document.getElementById('tab-2').style.display = 'flex'
    setActiveBnt1(false)
    setActiveBnt2(true)
  }
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>
      <Header />
      <div className="main">
        <h1 className="h1init">Organização</h1>
        <div className="card">
          <div className="tab">
            <button
              id="btn1"
              className={isActiveBnt1 ? 'active' : null}
              onClick={handleClick1}
            >
              Colaboradores
            </button>
            <button
              id="btn2"
              className={isActiveBnt2 ? 'active' : null}
              onClick={handleClick2}
            >
              Cargos
            </button>
            <div className="line" />
          </div>
          <div id="tab-1">
            <Agents />
          </div>
          <div id="tab-2" style={{ display: 'none' }}>
            <Roles />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Home
