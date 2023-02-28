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
import ResidentManagement from './components/Admin/Sercurity/ResidentManagement';
import CustomerManagement from './components/Admin/Sercurity/CustomerManagement';
import InvoiceManagement from './components/Admin/Sercurity/InvoiceManagement';
import Price from './components/Screen/Price';
import SlotManagement from './components/Admin/Sercurity/SlotManagement';
import './components/Account/Account.css';
import HeaderAccount from './components/Account/HeaderAccount';
import FooterAccount from './components/Account/FooterAccount';
import HistoryBooking from './components/Account/HistoryBooking';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BodyLink from './components/Account/BodyLinkAccount';
import AllBooking from './components/Account/AllBooking';
import CompletedBooking from './components/Account/CompletedBooking';
import CancelledBooking from './components/Account/CancelBooking';
import ProfileSetting from './components/Account/ProfileSetting';
import AccountInformation from './components/Account/AccountInformation';


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
          <Route path='/Past' element={<All></All>}></Route>
          <Route path='/Completed' element={<Completed></Completed>}></Route>
          <Route path='/Cancelled' element={<Cancelled></Cancelled>}></Route>
          <Route path='/AdminHomePage' element={<AdminHomePage></AdminHomePage>}></Route>
          <Route path='/ResidentManagement' element={<ResidentManagement></ResidentManagement>}></Route>
          <Route path='/CustomerManagement' element={<CustomerManagement></CustomerManagement>}></Route>
          <Route path='/InvoiceManagement' element={<InvoiceManagement></InvoiceManagement>}></Route>
          <Route path='/SlotManagement' element={<SlotManagement></SlotManagement>}></Route>
          <Route path='/Price' element={<Price></Price>}></Route>
          <Route path='/accountinformation' element={<AccountInformation />}></Route>
          <Route path='/logout' element={<HeaderAccount />}></Route>
          <Route path='/allbooking' element={<AllBooking />}></Route>
          <Route path='/pastbooking' element={<HistoryBooking />}></Route>
          <Route path='/completedbooking' element={<CompletedBooking />}></Route>
          <Route path='/cancelledbooking' element={<CancelledBooking />}></Route>
          <Route path='/profilesetting' element={<ProfileSetting />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}


export default App;
