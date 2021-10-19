import React from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import ListItems from './components/ListItems';
import FileUpload from './components/FileUpload';
import { Switch, Route, Link, useHistory, BrowserRouter as Router } from 'react-router-dom';

function App() {
  const dispatch = useDispatch();
  let history = useHistory();

  return (

    <Router><div className="App">
      <Link to='/'><div className="header"><div className="header-text">CATS GALLERY</div></div></Link>
      <Switch>
        <Route path="/upload">
          <FileUpload />
        </Route>
        <Route path="/">
        <Link to='/upload'><button className="uploadbutton button" >Upload New Cat Image</button></Link>
          <ListItems />
        </Route>
      </Switch></div>
    </Router>

  );
}

export default App;
