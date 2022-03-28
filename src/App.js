import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/Homepage';
import CollectionPage from './pages/collection-page/Collections';
import Header from './components/header/header';
import Authentication from './components/authentication/authentication';

function App() {
  return (
    
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component = {Homepage}/>
        <Route exact path='/collection' component = {CollectionPage}/>
        <Route exact path='/signin' component = {Authentication}/>
      </Switch>
    </div>
  );
}

export default App;
