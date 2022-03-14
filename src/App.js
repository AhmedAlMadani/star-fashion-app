import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';
import CollectionPage from './pages/collection-page/Collections';
import './App.css';
import Header from './components/header/header';

function App() {
  return (
    
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component = {Homepage}/>
        <Route exact path='/collection' component = {CollectionPage}/>
      </Switch>
    </div>
  );
}

export default App;
