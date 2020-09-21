import React, {useState} from 'react';
import './App.css';
import {NewProvider} from './contexts/NewContext';
import Nav from './components/Nav'
import List from './components/List';

function App() {
  const [input, setInput] = useState('')
  function handleInput(value){
    setInput(value)
  }
  const contextData = {
    input,
    handleInput
  }
  return (
    <NewProvider value={contextData}>
      <Nav />
      <List />
    </NewProvider>
  );
}

export default App;
