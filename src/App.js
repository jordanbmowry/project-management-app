import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// styles
import './App.css';

// pages and components
import Dashboard from './pages/dashboard/Dashboard';
import Create from './pages/create/Create';
import Login from './pages/login/Login';
import Project from './pages/project/Project';
import Signup from './pages/signup/Signup';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  console.log(process.env);
  return (
    <div className='App'>
      <Router>
        <Sidebar />
        <div className='container'>
          <Navbar />
          <Switch>
            <Route exact path='/'>
              <Dashboard />
            </Route>
            <Route exact path='/create'>
              <Create />
            </Route>
            <Route exact path='/projects/:id'>
              <Project />
            </Route>
            <Route exact path='/login'>
              <Login />
            </Route>
            <Route exact path='/signup'>
              <Signup />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
