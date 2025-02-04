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
import About from './About';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter><Routes>
      <Route path='/Home' element={<Home></Home>} ></Route>
      <Route path='/about' element={<About></About>} ></Route>
      <Route path='/contact' element={<Contact></Contact>} ></Route>
     
      </Routes>
      </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
