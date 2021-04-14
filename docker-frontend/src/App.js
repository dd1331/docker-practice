import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {

  
  useEffect(() => {
    axios.get('/api/values').then(res => {
      console.log('res', res.data);
      setLists(res.data);
    });
  }, [])
  
  const [lists, setLists] = useState([]);
  const [value, setValue] = useState("");

  const changeHandler = (e) => {
    setValue(e.currentTarget.value);
  }
  const submitHandler = (e) => {
    e.preventDefault();
    axios.post('/api/value', { value }).then(res => {
      if (res.data.success) {
        console.log('res', res);
        setLists([...lists, res.data]);
        setValue('');
        return;
      }
      alert ('db insert error');
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="container">

          {lists && lists.map((list, index) => {
            <li key={index}>list.value</li>
          })}

          <form className="example" onSubmit>
            <input type="text" placeholder="input" onChange={changeHandler} value={value}></input>
            <button type="submit" onSubmit={submitHandler}>ok</button>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
