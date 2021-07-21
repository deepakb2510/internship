import React from 'react';
import './App.css';
import PrivateRoute from './pages/PrivateRoute';
import { AuthProvider } from './pages/contexts/AuthContext';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Services from './pages/services';
import Contact from './pages/contact';
import Signup from './pages/Signup'
import Login from './pages/Login';
import Loginsucess from './pages/Loginsucess';
import UpdateProfile from './pages/UpdateProfile';
import ForgotPassword from './pages/ForgotPassword';
function App() {
  return (
    <AuthProvider>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/services' component={Services} />
        <Route path='/contact-us' component={Contact} />
        <Route path='/signup' component={Signup} />
        <Route path='/login' component={Login} />
        <PrivateRoute path = "/loginsucess" component = {Loginsucess}/>
        <PrivateRoute path = "/update-profile" component = {UpdateProfile}/>
          <Route path = "/forgot-password" component = {ForgotPassword}/>
      </Switch>
    </Router>
    </AuthProvider>
  );
}

export default App;