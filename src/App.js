import logo from './/logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import { ToastContainer } from 'react-toastify';
import ForgottenPwd from './components/Forgotten-pwd';
import Header from './components/Header';
import Reservation from './components/Reservation';
import PaymentInformation from './components/PaymentInformation';
import Banking from './components/Banking';
import ReservationComplete from './components/ReservationComplete';
import ZoneDetai from './components/ZoneDetail';
import ZoneDetail from './components/ZoneDetail';


function App() {
  return (
    <div className="App">
      <ToastContainer theme='colored' position='top-right'></ToastContainer>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/Forgotten-pwd' element={<ForgottenPwd />}></Route>
          <Route path='/Reservation' element={<Reservation />}></Route>
          <Route path='/PaymentInformation' element={<PaymentInformation />}></Route>
          <Route path='/Banking' element={<Banking></Banking>}></Route>
          <Route path='/ReservationComplete' element={<ReservationComplete />}></Route>
          <Route path='/ZoneDetail/:index' element={<ZoneDetail />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}


export default App;
