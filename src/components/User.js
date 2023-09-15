import React from 'react'
import { forwardRef } from 'react'

const User = (props, reff) => {
  return (
    <div>
      <input type='text' ref={reff} />
    </div>
  )
}

export default forwardRef(User)
