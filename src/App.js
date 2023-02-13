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
import Account_Header from './components/accountHeader';
import Account_Footer from './components/accountFooter.jS';
import Account_Body from './components/accountBody';


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
          <Route path='/PaymentInformation' element={<PaymentInformation></PaymentInformation>} ></Route>
          <Account_Header></Account_Header>
          <Account_Body></Account_Body>
          <Account_Footer></Account_Footer>
        </Routes>

      </BrowserRouter>

    </div>
  );
}


export default App;
