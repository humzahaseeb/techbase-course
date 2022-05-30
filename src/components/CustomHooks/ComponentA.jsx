import React from 'react'
import UseIsMobile from './useIsMobile'

const ComponentA = () => {

    const isMobile = UseIsMobile()

    console.log(isMobile, 'ComponentA')

  return (
    <div></div>
  )
}

export default ComponentA