import React, {useState} from 'react';
import {NewProvider} from '../../contexts/NewContext';
import Nav from '../../components/Nav'
import List from '../../components/List';

function Home() {
  const [input, setInput] = useState('')
  function handleInput(value){
    setInput(value)
  }
  const contextData = {
    input,
    handleInput
  }

  return (
    <>
    <NewProvider value={contextData}>
      <Nav showInput={true}/>
      <List />
    </NewProvider>
    </>
  );
}

export default Home;