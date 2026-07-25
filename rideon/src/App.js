import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Componants/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Bikes from './Componants/Bikes';
import Navbar from './Componants/Navbar';
import Login from './Componants/Login';
import Booking from './Componants/Booking';
import Mybooking from './Componants/Mybooking';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/bikes' element={<Bikes/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/booking' element={<Booking/>}/>
          <Route path='/mybooking' element={<Mybooking/>}/>
        </Routes>
      </Router>
      {/* <Home/> */}
    </div>
  );
}

export default App;
