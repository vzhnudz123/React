import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Parent from './Parent';
import Reactboot from './Reactboot';
import {BrowserRouter ,Routes,Route, Form} from 'react-router-dom'

import Home from './Home';
import Properprompts from './Properprompts';
import Login from './Login';
import Usestate from './Usestate';
import Toggle from './Toggle';
import Api from './Api';
import Apitask from './Apitask';
import ParentUser from './ParentUser';
import Weatherapp from './Weatherapp';
import Weather from './Weather';
import Weatherapps from './Weatherapps';
import Movie from './Movie';
import Moviesweb from './Moviesweb';
import Movieslink from './Movieslink';
import Forms from './Forms';
import Userlogin from './Userlogin';
import Main from './rendering/Main';
import Scri from './userpermissioncheck/Scri';
import Checkk from './userpermissioncheck/Checkk';
import Calcu from './calculator/Calcu';
import { Provider } from 'react-redux';
import Reduxt from './reduxt/Reduxt';
import store from './reduxt/Counterstore';
import Cart from './reduxt/Cart';
import Carthtml from './cartpageREDUX/Carthtml';
import Cartpage from './cartpageREDUX/Cartpage';
import storee from './cartpageREDUX/Cartstore';
import Consumer from './contextAPI/Consumer';
import Providercontext from './contextAPI/Providercontext';
import Langprovider from './langcontext/Langprovider';
import Contentpage from './langcontext/Contentpage';
import Carfront from './Carfront';
import Favpage from './Favpage';
import carstore from './Carsstore';
import Backendtest from './backendtest';
import Contactcar from './Contactcar';
import Detailscar from './Detailscar';
import App from './props/App';
import { Testcar } from './Testcar';
import Updatepage from './Updatepage';
import Bookadd from './Bookapp/Bookadd';
import Bookview from './Bookapp/Bookview';
import Bookdel from './Bookapp/Bookdel';
import Bookupdate from './Bookapp/Bookupdate';
import Bookimg from './Bookapp/Bookimg';
import Logins from './Loginpage/Logins';
import { Profile } from './Loginpage/Profile';
import { Minilogin } from './miniproject/Minilogin';
import Blog from './BLOG/Blog';
import Blogregister from './BLOG/Blogregister';
import { Bloglogin } from './BLOG/Bloglogin';










const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Provider store={carstore}>
    
    <Langprovider>
    <Providercontext>

      <BrowserRouter>
      <Routes>

      <Route path='/redux' element={<Reduxt></Reduxt>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/cart' element={<Cart></Cart>}></Route>
      <Route path='/carthtml' element={<Carthtml></Carthtml>}></Route>
      <Route path='/cartpage' element={<Cartpage></Cartpage>}></Route>
      <Route path='/consumer' element={<Consumer></Consumer>}></Route>
      <Route path='/page' element={<Contentpage></Contentpage>}></Route>

      <Route path='/carweb' element={<Carfront></Carfront>}></Route>
      <Route path='/favpage' element={<Favpage></Favpage>}></Route>
      <Route path='/back' element={<Backendtest></Backendtest>}></Route>
      <Route path='/contact' element={<Contactcar></Contactcar>}></Route>
      <Route path='/cardetails' element={<Detailscar></Detailscar>}></Route>
      <Route path='/stud' element={<App></App>}></Route>
      <Route path='/testcar' element={<Testcar></Testcar>}></Route>
      <Route path='/form' element={<Forms></Forms>}></Route>
      <Route path='/update/:id' element={<Updatepage></Updatepage>}></Route>
      <Route path='/bookadd' element={<Bookadd></Bookadd>}></Route>
      <Route path='/bookview' element={<Bookview></Bookview>}></Route>
      <Route path='/bookupdate/:id' element={<Bookupdate></Bookupdate>}></Route>
      <Route path='/bookimg' element={<Bookimg></Bookimg>}></Route>
      <Route path='/logins' element={<Logins></Logins>}></Route>
      <Route path='/profile' element={<Profile></Profile>}></Route>
      <Route path='/minilogin' element={<Minilogin></Minilogin>}></Route>
      <Route path='/blog' element={<Blog></Blog>}></Route>
      <Route path='/blogregister' element={<Blogregister></Blogregister>}></Route>
      <Route path='/bloglogin' element={<Bloglogin></Bloglogin>}></Route>
      



      


      </Routes>

      </BrowserRouter>


      </Providercontext>
      </Langprovider>
      </Provider>




    

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
