import './App.css';
import {BrowserRouter, Switch,Route} from 'react-router-dom'
import Navbar from './components/Layout/Navbar';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import axios from "axios"
import Home from './components/home';

axios.defaults.withCredentials = true

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>

          <Route exact path="/register">
              <Register/>
          </Route>

          <Route exact path="/login">
            <Login/>
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
