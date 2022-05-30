import React from 'react'
import UseIsMobile from './useIsMobile'

const ComponentB = () => {

    const isMobile = UseIsMobile()

    console.log(isMobile, 'ComponentB')

  return (
    <div></div>
  )
}

export default ComponentB