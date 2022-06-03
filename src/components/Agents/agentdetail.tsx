import React from 'react'
import api from '../../api/api'

function AgentDetailComponent(): JSX.Element {
  const [info, setInfo] = React.useState(null)

  // axios show data from agents
  React.useEffect(() => {
    api
      .get('/agent/1')
      .then(response => {
        setInfo(response.data.agent)
        console.log(response.data.agent)
      })

      .catch(error => {
        console.log(error)
      })
  }, [])

  if (!info) return null

  return (
    <div>

          <img src={info.image}/>
        
          <div key={info.id}></div>
          <div>{info.name}</div>
          <div>{info.email}</div>
          <div>{info.phone.ddi}</div>
          <div>{info.phone.ddd}</div>
          <div>{info.phone.number}</div>
          <div>{info.document.type}</div>
          <div>{info.document.number}</div>
          <div>{info.birth_date}</div>
          <div>{info.departament}</div>
          <div>{info.branch}</div>
          <div>{info.role}</div>
          <div>{info.status}</div>
        

    </div>
  )
}
export default AgentDetailComponent
