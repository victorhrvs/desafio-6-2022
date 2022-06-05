import React from 'react'
import api from '../../api/api'

function resolverDepoisDe2Segundos(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x)
    }, 10)
  })
}

function AgentDetailComponent(): JSX.Element {
  const [info, setInfo] = React.useState(null)
  const [birth, setBirth] = React.useState('null')

  async function defineBirth(dados) {
    try {
      var a = await resolverDepoisDe2Segundos(dados)
    } catch (error) {
      error => {
        console.log(error)
      }
      const date = new Date(String(a))
      const day = date.getDate().toString().padStart(2, '0')
      const month = (date.getMonth() + 1).toString().padStart(2, '0')
      const year = date.getFullYear()
      setBirth(`${day}/${month}/${year}`)
    }
  }

  // axios show data from agents
  React.useEffect(() => {
    api
      .get('/agent/1')
      .then(response => {
        setInfo(response.data.agent)
        console.log(response.data.agent)
        defineBirth(info)
      })

      .catch(error => {
        console.log(error)
      })
  }, [])

  if (!info) return null

  return (
    <div>
      <div className="perfil">
        <img
          src={info.image}
          width={80}
          height={80}
          style={{ borderRadius: '80px' }}
        />
        <div className="perfilName">
          <div key={info.id}></div>
          <h2 className="infoname">{info.name}</h2>
          <p>{info.email}</p>
        </div>
      </div>
      <h2 className="h2infor h2info">Informações pessoais</h2>
      <div className="flow_minicard">
        <div className="miniCard">
          <img src={'./circle.png'} height={38} width={38} />
          <div>
            <h3>{info.document.type}</h3>
            <p>{info.document.number}</p>
          </div>
        </div>
        <div className="miniCard" id="mini">
          <img src={'./tel.png'} height={38} width={38} />
          <div>
            <h3>Telefone</h3>
            <p>
              {info.phone.ddi}
              {info.phone.ddd}
              {info.phone.number}
            </p>
          </div>
        </div>
        <div className="miniCard">
          <img src={'./calen.png'} height={38} width={38} />
          <div>
            <h3>Nascimento</h3>
            <p>{birth}</p>
          </div>
        </div>
      </div>

      <div className="menus">
        <h2>Dados organizacionais</h2>

        <div className="limit">
          
          <select className="menuSelect" name="Departamento" id="departament">
            <option value={info.departament} selected>
              {info.departament}
            </option>
          </select>
        

        
          
          <select className="menuSelect" name="Cargo" id="branch">
            <option value={info.branch} selected>
              {info.branch}
            </option>
          </select>
        </div>

        <div className="limit">
          
          <select className="menuSelect" name="Unidade" id="role">
            <option value={info.role} selected>
              {info.role}
            </option>
          </select>


          
          <select className="menuSelect" name="Status" id="status">
            <option value={info.status} selected>
              {info.status}
            </option>
          </select>
        </div>
      </div>
    </div>
  )
}
export default AgentDetailComponent
