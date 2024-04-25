import React from 'react'
import WithAuth from './WithAuth'

const BaseComponent = () => {
  return (
    <div>
      Base Component Rendered
    </div>
  )
}

export default WithAuth(BaseComponent)
