import React, { useRef } from 'react'

const Uncontrolled = () => {

  const inputRef = useRef(null);

  function handler(){
    alert("Input is: " +inputRef.current.value)
  }


  return (
    <div>
      <input type='text' ref={inputRef}/>
      <button onClick={handler}>Click Me</button>
    </div>
  )
}

export default Uncontrolled
