import './App.css';
import Name from './components/Name';
import Counter from './components/Counter';

import React, { useState } from 'react';
import PropDrilling from './components/PropDrilling';
import Show from './components/Show';
import Context from './components/Context';
import About from './components/About';


function App() {
  const [show, setShow] = useState(true)

  const toggleShow = () => setShow(prevShow => !prevShow)

  return (
    <>
    <Context />
      <Show
        show={show}
        toggleShow={toggleShow} />
      <PropDrilling />
      <Counter />
      <Name title="Kryslin" />
      <Name />
      <About name="Kryslin" />
    </>
  );
}

export default App;
