import React from 'react'
import { useRootEngine } from 'flume'
import engine from './engine'

const fakeUser = {
  firstName: "Bustopher",
  lastName: "Jones",
  isLoggedIn: true,
  isAdmin: false
}

const Homepage = ({ nodes }) => {
  const [user, setUser] = React.useState(fakeUser)
  const {
    title,
    description,
    showSignup,
    copyrightYear
  } = useRootEngine(nodes, engine, {user})

  const login = () => setUser(fakeUser)
  const logout = () => setUser(nullUser)

  return (
    <div className="homepage">
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>
      {
        user.isLoggedIn ?
        <button onClick={logout}>Logout</button>
        :
        <button onClick={login}>Login</button>
      }
      {
        showSignup &&
        <form className="signup">
          <input type="email" />
          <button>Signup!</button>
        </form>
      }
      <footer>© flume {copyrightYear}</footer>
    </div>
  )
}

export default Homepage