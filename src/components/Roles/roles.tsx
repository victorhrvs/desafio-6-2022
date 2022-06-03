import React from 'react'
import api from '../../api/api'

function AgentsComponent(): JSX.Element {
  const [info, setInfo] = React.useState(null)

  // axios show data from agents
  React.useEffect(() => {
    api
      .get('/roles')
      .then(response => {
        setInfo(response.data.roles)
        console.log(response.data.roles)
      })

      .catch(error => {
        console.log(error)
      })
  }, [])

  if (!info) return null

  return (
    <div>
      <table>
        <tr>
          <th>Cargo</th>
          <th>Departamento</th>
          <th>Colaboradores</th>
          <th>...</th>
        </tr>
        {info?.map((item, index )=> (
          <tr key={index}>
            <td>
              {item.name}
            </td>
            <td>{item.departament}</td>
            <td>{item.agents_quantity}</td>
            <td>...</td>

          </tr>
        ))}
      </table>
    </div>
  )
}
export default AgentsComponent
