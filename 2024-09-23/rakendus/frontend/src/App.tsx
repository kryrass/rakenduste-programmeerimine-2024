import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

// Vaata snackbar

interface Cat {
  id: number;
  name: string;
}

function App() {
  const [cats, setCats] = useState<Cat[]>([]);

  useEffect(() => {
    const fetchCats = async () => {
      const response = await fetch('http://localhost:8080/cats');
      const data: Cat[] = await response.json(); 
      setCats(data);
    };

    fetchCats();
  }, []);

  return (
    <div>
      <h1>Cats</h1>
      <ul>
        {cats.map((cat) => (
          <li key={cat.id}>{JSON.stringify(cat)}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
