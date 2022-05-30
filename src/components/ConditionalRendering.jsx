import React, {useState} from 'react'

const ConditionalRendering = () => {

  const [toggle, setToggle] = useState(false)

  function toggleClick(){
    setToggle(prevState => !prevState)
  }

  return (
    <>
      <h1>{toggle ? 'ON' : 'OFF'}</h1>
      <button onClick={toggleClick}>toggle</button>
    </>
  )
}

export default ConditionalRendering