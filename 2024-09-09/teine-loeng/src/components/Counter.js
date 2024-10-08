import React, { useState } from "react"

const Counter = () => {
  const [counter, setCounter] = useState(0)

  const modifyCounter = (amount) => setCounter(prevCounter => prevCounter + amount)

  return (
    <>
      <h1>{counter}</h1>

      {[+1, +5, +50, -1, -5, -50].map(element => (
        <button key={element} onClick={() => modifyCounter(element)}>sync {element >= 0 ? `+${element}`: element}</button>
      ))}

      <button onClick={() => setTimeout(() => modifyCounter(1), 2000)}>
        async +1
      </button>
    </>
  )
}

export default Counter