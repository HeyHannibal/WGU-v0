import './App.css';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Input from './components2/input'
import Output from './components2/output';
import MuiButton from './components2/muiButton';
function App() {
  const [toRender, setToRender] = useState([])


  return (
    <div className="App">
    <Input></Input>
    {/* <Output></Output> */}
    </div>
  );
}

export default App;
