import './App.css';
import Home from './Components/Home';
import Header from './Components/Header';
import Login from './Components/Login';
import About from './Components/About';
import Secure from './Components/Secure';
import Barchats from './Components/Barchats';
import {BrowserRouter , Switch,Route} from 'react-router-dom'


function App() {
  return (
   <>
<BrowserRouter>
<Header/>
<Switch>
  <Route path="/" exact component={Home} />
    <Route path="/Login" exact component={Login} />
    <Route path="/Barchats" exact component={Barchats} />
    <Secure path="/About" exact component={About} />
</Switch>


</BrowserRouter>

   
   </>
  );
}

export default App;
