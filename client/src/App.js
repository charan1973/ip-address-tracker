import './App.css';
import 'leaflet/dist/leaflet.css';
import { Route, Switch } from 'react-router';
import Home from './pages/Home.page';
import Login from './pages/Login/Login.page';
import PrivateRoute from './components/PrivateRoute.component';

function App() {
  return (
    <Switch>
      <PrivateRoute exact path="/" component={Home} /> 
      <Route exact path="/login" component={Login} /> 
    </Switch>
  );
}

export default App;
