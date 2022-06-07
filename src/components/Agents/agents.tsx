import React from 'react'
import api from '../../api/api'

function AgentsComponent(): JSX.Element {
  const [info, setInfo] = React.useState(null)

  // axios show data from agents
  React.useEffect(() => {
    api
      .get('/agents')
      .then(response => {
        setInfo(response.data.items)
        console.log(response.data.items)
      })

      .catch(error => {
        console.log(error)
      })
  }, [])

  if (!info) return null

  return (
    <div>
      <h2 id="listColab">Listagem de colaboradores</h2>
      <table>
        <tr className="headerTable">
          <th>Nome completo</th>
          <th>Departamento</th>
          <th>Cargo</th>
          <th>Unidade</th>
          <th>Status</th>
          <th>...</th>
        </tr>
        {info?.map(item => (
          <tr key={item.agent_id}>
            <td className="bold">
              <img
                src={item.image}
                width={32}
                height={32}
                style={{ borderRadius: '80px' }}
              />
              {item.name}
            </td>
            <td>{item.department}</td>
            <td>{item.branch}</td>
            <td>{item.role}</td>
            <td>
              {item.status || item.inactivestatus}
            </td>

            <td>...</td>
          </tr>
        ))}
      </table>
    </div>
  )
}
export default AgentsComponent
