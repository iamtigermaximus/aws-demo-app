import { useState, useEffect } from 'react'
import { API } from 'aws-amplify'
import { listProjects } from './graphql/queries'

function App() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetchProjects()
  }, [])
  async function fetchProjects() {
    const apiData = await API.graphql({ query: listProjects })
    const projectsFromAPI = apiData.data.listProjects.items
    setProjects(projectsFromAPI)
    console.log(projectsFromAPI)
  }
  return (
    <div>
      <h1>Hello Siegfred</h1>
      <button onClick={fetchProjects}>Fetch</button>
      {projects.map((project) => (
        <h1 key={project.id}>{project.title}</h1>
      ))}
    </div>
  )
}

export default App
