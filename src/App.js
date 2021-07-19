import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Defaultpage from './components/pages/Defaultpage';
import About from './components/pages/About';
import Contactus from './components/pages/Contactus';
import Layout from './components/layout/Layout';

function App() {
  return (
    <div className="Main">
      <Layout >
        <Switch>
          <Route path='/' exact>
            <Defaultpage></Defaultpage>
          </Route>
          <Route path='/About'>
            <About></About>
          </Route>
          <Route path='/Contactus'>
            <Contactus></Contactus>
          </Route>
      </Switch>
      </Layout>
    </div>
  );
}

export default App;
