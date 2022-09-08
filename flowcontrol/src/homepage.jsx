import React from 'react'
import { useRootEngine } from 'flume'
import engine from './engine'

const fakeUser = {output:
  [{"model":"A"},{"dataset":"B"}]
}
const nullUser = {
  firstName: "",
  lastName: "",
  isLoggedIn: false,
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
    <div>Output data{fakeUser}</div>
  )
}

export default Homepage