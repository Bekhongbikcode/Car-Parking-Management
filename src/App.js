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


import SercurityHomePage from './components/Admin/Sercurity/SercurityHomepae';
import ResidentManagement from './components/Admin/Sercurity/ResidentManagement';
import CustomerManagement from './components/Admin/Sercurity/CustomerManagement';
import InvoiceManagement from './components/Admin/Sercurity/InvoiceManagement';
import Price from './components/Screen/Price';
import SlotManagement from './components/Admin/Sercurity/SlotManagement';
import BuildingManagerHomePage from './components/Admin/BuildingManager/BuildingManagerHomePage';
import SercurityManagement from './components/Admin/BuildingManager/SercurityManagement';
import AdminLogin from './components/Admin/AdminLogin';
import RevenueManagement from './components/Admin/BuildingManager/RevenueManagement';
import HeadManagerHomePage from './components/Admin/HeadManager/HeadManagerHomePage';




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
          <Route path='/SercurityHomePage' element={<SercurityHomePage></SercurityHomePage>}></Route>
          <Route path='/ResidentManagement' element={<ResidentManagement></ResidentManagement>}></Route>
          <Route path='/CustomerManagement' element={<CustomerManagement></CustomerManagement>}></Route>
          <Route path='/InvoiceManagement' element={<InvoiceManagement></InvoiceManagement>}></Route>
          <Route path='/SlotManagement' element={<SlotManagement></SlotManagement>}></Route>
          <Route path='/BuildingManagerHomePage' element={<BuildingManagerHomePage></BuildingManagerHomePage>}></Route>
          <Route path='/SercurityManagement' element={<SercurityManagement></SercurityManagement>}></Route>
          <Route path='/Price' element={<Price></Price>}></Route>
          <Route path='/AdminLogin' element={<AdminLogin></AdminLogin>}></Route>
          <Route path='/RevenueManagement' element={<RevenueManagement></RevenueManagement>}></Route>
          <Route path='/HeadManagerHomePage' element={<HeadManagerHomePage></HeadManagerHomePage>}></Route>




        </Routes>
      </BrowserRouter>

    </div>
  );
}


export default App;
