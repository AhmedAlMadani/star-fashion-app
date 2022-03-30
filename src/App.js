import './App.scss'

import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home';
import Authentication from './components/authentication/authentication';
import Header from './routes/header/header';
import Collections from './routes/collection/collection-page';


const App = () => {

    return (
      <Routes>
        <Route path='/' element = {<Header />}>
          <Route index element = {<Home />}/>
          <Route path='auth' element = {<Authentication />}/>
          <Route path='collections' element = {<Collections />}/>
        </Route>
      </Routes>
        
    );
}



export default App;
