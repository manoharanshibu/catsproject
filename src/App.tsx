import React from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import ListItems from './components/ListItems';
import FileUpload from './components/FileUpload';

function App() {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div className="header"><div className="header-text">CATS GALLERY</div></div>
      <><FileUpload />
        <ListItems /></>
    </div>
  );
}

export default App;
