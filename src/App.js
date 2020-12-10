//import logo from '../assets/image/logo.svg';
//import './App.css';
import './assets/css/style.css'
import NavBar from './containers/NavBar'
import Main from './containers/Main'
import Links from './containers/Links'
import Location from './containers/Location'
import Footer from './containers/Footer'

function App() {
  return (
    <div className="App">
      <NavBar /> 
      <Main />
      <Links />
      <Location />
      <Footer />
    </div>
  );
} 

export default App;
