//import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from "react-router-dom";
import Avaleht from './pages/Avaleht';
import Kinkekaart from './pages/Kinkekaart';
import Esindused from './pages/Esindused';
import Ariklient from './pages/Ariklient';
import Ostukorv from './pages/Ostukorv';
import Seaded from './pages/Seaded';
import LisaToode from './pages/LisaToode';

function App() {
  return (
    <div className="App">
      {/* img peale vajutades läheb: localhost:3000/avaleht */}
      <Link to="avaleht">
        <img className="pilt" src="https://estonia.ee/wp-content/uploads/nobe_netist_4.jpg" alt="logo" />
      </Link>

      {/* button peale vajutades läheb: localhost:3000/osta-kinkekaart */}
      <Link to="osta-kinkekaart">
        <button className="nupp">Kinkekaart</button>
      </Link>

      <Link to="esindused">
        <button className="nupp">Esindused</button>
      </Link>

      <Link to="arikliendile">
        <button className="nupp">Ärikliendile</button>
      </Link>

      <Link to="ostukorv">
        <button className="nupp">Ostukorv</button>
      </Link>

      <Link to="seaded">
        <button className="nupp">Seaded</button>
      </Link>

      <Link to="lisa-toode">
        <button className="nupp">Lisa toode</button>
      </Link>


{/* kui ollakse localhost:3000/osta-kinkekaart lehel, siis näidatakse sisu (HTML): <div>Olen K</div> */}
      <Routes>
        <Route path="avaleht" element={ <Avaleht /> }></Route>
        <Route path="osta-kinkekaart" element={ <Kinkekaart /> }></Route>
        <Route path="esindused" element={ <Esindused /> }></Route>
        <Route path="arikliendile" element={ <Ariklient /> }></Route>
        <Route path="ostukorv" element={ <Ostukorv /> }></Route>
        <Route path="seaded" element={ <Seaded /> }></Route>
        <Route path="lisa-toode" element={ <LisaToode /> }></Route>
      </Routes>
    </div>
  );
}

export default App;

/* <br /> 
      <button>1</button>
      <p>Tekst</p>
      <button>2</button>
      <div>Tekst2</div>
      <button>3</button>
      <h4>Tekst3</h4>
      <button>4</button>
      <h3>Tekst4</h3>
      <button>5</button> */
