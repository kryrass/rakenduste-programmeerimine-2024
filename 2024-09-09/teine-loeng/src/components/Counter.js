import React, { useState } from "react"

const Counter = () => {
  const [counter, setCounter] = useState(0)

  const modifyCounter = () => setCounter(prevCounter => prevCounter + 1)

  return (
    <>
      <h1>{counter}</h1>

      
      <button onClick={() => setCounter(counter + 1)}>sync+1</button>

      <button onClick={() => setTimeout(() => modifyCounter(), 500)}>
        {" "}
        async +1{" "}
      </button>
    </>
  )
}

export default Counter
