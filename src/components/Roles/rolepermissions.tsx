import React from 'react'
import api from '../../api/api'

function RolePermissionsComponent(): JSX.Element {
  const [info, setInfo] = React.useState(null)
  const [p, setP] = React.useState(null)

  // axios show data from agents
  React.useEffect(() => {
    api
      .get('/role/1')
      .then(response => {
        setInfo(response.data.role)
        console.log(response.data.role)
      })

      .catch(error => {
        console.log(error)
      })
  }, [])

  if (!info) return null

  return (
    <div>
      <div>Departamento {info.department}</div>
      <div>Cargo {info.name}</div>
      <table>
        <tr>
          <th>Cargo</th>
          <th>Ler</th>
          <th>Editar</th>
          <th>Excluir</th>
        </tr>

        {info.grouprules.map(item => (
          <tr key={item.id}>
            <td>{item.role}</td>
            <td>{item.read}</td>

            <td>
              <input
                type="checkbox"
                className="read"
                id={item.role}
                checked={
                  item.permissions[0] === 'read' ||
                  item.permissions[1] === 'read' ||
                  item.permissions[2] === 'read'
                }
              />
            </td>
            <td>
              <input
                type="checkbox"
                className="write"
                id={item.role}
                checked={
                  item.permissions[0] === 'write' ||
                  item.permissions[1] === 'write' ||
                  item.permissions[2] === 'write'
                }
              />
            </td>
            <td>
              <input
                type="checkbox"
                className="delete"
                id={item.role}
                checked={
                  item.permissions[0] === 'delete' ||
                  item.permissions[1] === 'delete' ||
                  item.permissions[2] === 'delete'
                }
              />
            </td>
          </tr>
        ))}
      </table>
    </div>
  )
}
export default RolePermissionsComponent
