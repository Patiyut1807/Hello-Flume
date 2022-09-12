import React from 'react'
import { useRootEngine } from 'flume'
import engine from './engine'



const Homepage = ({ nodes }) => {
  const {
    title,
    description,
    showSignup,
    copyrightYear
  } = useRootEngine(nodes, engine, {user})


  return (
    <div className="homepage">
      <div>{}</div>
    </div>
  )
}

export default Homepage