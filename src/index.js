import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Parent from './Parent';
import Reactboot from './Reactboot';
import {BrowserRouter ,Routes,Route} from 'react-router-dom'
import Contact from './Contact';
import Home from './Home';
import Properprompts from './Properprompts';
import Login from './Login';
import Usestate from './Usestate';
import Toggle from './Toggle';
import Api from './Api';
import Apitask from './Apitask';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter><Routes>
      <Route path='/Home' element={<Home></Home>} ></Route>
      <Route path='/login' element={<Login></Login>} ></Route>
      <Route path='/contact' element={<Contact></Contact>} ></Route>
      <Route path='/properprompts' element={<Properprompts></Properprompts>}></Route>
      <Route path='/reactboot' element={<Reactboot></Reactboot>}></Route>
      <Route path='/usestate' element={<Usestate></Usestate>}></Route>
      <Route path='/toggle' element={<Toggle></Toggle>}></Route>
      <Route path='/api' element={<Api></Api>}></Route>
      <Route path='/apitask' element={<Apitask></Apitask>}></Route>
     
      </Routes>
      </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
