import './assets/images/logo.png'
import './assets/css/style.css'
import NavBar from './containers/NavBar'
import Home from './containers/Home'
import Footer from './containers/Footer'
import Announcements from './components/Announcements'
import BridgeGroups from './components/BridgeGroups'
import Committees from './components/Committees'
import Contact from './components/Contact'
import Covid19 from './components/Covid19'
import Events from './components/Events'
import Staff from './components/Staff';
import Values from './components/Values'
import Worship from './components/Worship'
import Welcome from './components/Welcome'
import Switch from 'react-bootstrap/esm/Switch'
import { Route } from 'react-router'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/announcements" component={Announcements} />
        <Route exact path="/bridgegroups" component={BridgeGroups} />
        <Route exact path='/committees' component={Committees} />
        <Route exact path="/prayer" component={Contact} />
        <Route exact path="/covid-19" component={Covid19} />
        <Route exact path="/events" component={Events} />
        <Route exact path='/staff' component={Staff} />
        <Route exact path="/values" component={Values} />
        <Route exact path="/worship" component={Worship} />
        <Route exact path="/welcome" component={Welcome} />
      </Switch> 
      <Footer />
     </div>
  );
} 

export default App;
