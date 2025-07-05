import { useLoaderData } from 'react-router-dom'
import './Github.css'

function Github() {
  const data = useLoaderData()

  return (
    <div className="github-container">
      <p className="followers">Github followers: {data.followers}</p>
      <img src={data.avatar_url} alt="Git picture" className="github-avatar" />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/vivekSingh1406')
  return response.json()
}
