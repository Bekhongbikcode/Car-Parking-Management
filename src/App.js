import logo from './/logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Main/Home';
import Login from './components/Login/Login';
import Register from './components/Registration/Register';
import { ToastContainer } from 'react-toastify';
import ForgottenPwd from './components/Login/Forgotten-pwd';
import Reservation from './components/Payment/Reservation';
import PaymentInformation from './components/Payment/PaymentInformation';
import Banking from './components/Payment/Banking';
import ReservationComplete from './components/Payment/ReservationComplete';
import ZoneDetail from './components/Zone/ZoneDetail';
import Account from './components/Account/MyAccount';
import Cancelled from './components/Account/cancelledBooking';
import All from './components/Account/Past';
import Completed from './components/Account/completedBooking';
import AdminHomePage from './components/Admin/AdminHomepae';


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
          <Route path='/MyAccount' element={<Account></Account>}></Route>
          <Route path='/Past' element = {<All></All>}></Route>
          <Route path='/Completed' element={<Completed></Completed>}></Route>
          <Route path='/Cancelled' element={<Cancelled></Cancelled>}></Route>
          <Route path='/AdminHomePage' element={<AdminHomePage></AdminHomePage>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}


export default App;
