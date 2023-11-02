import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ContactPage from './routes/ContactPage';
import Course1Page from './routes/Course1Page';
import Course2Page from './routes/Course2Page';
import AboutusPage from './routes/AboutusPage';
import PortfolioPage from './routes/PortfolioPage';
import OurcontentPage from './routes/OurcontentPage';
import SigninPage from './routes/SigninPage';
import RegistrationPage from './routes/RegistrationPage';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
   <Route path='/' element={<App/>}/>
   <Route path='/Ourcontent' element={<OurcontentPage/>}/>
   <Route path='/Contact' element={<ContactPage/>}/>
   <Route path='/Aboutus' element={<AboutusPage/>}/>
   <Route path='/Portfolio' element={<PortfolioPage/>}/>
   <Route path='/course1' element={<Course1Page/>}/>
   <Route path='/course2' element={<Course2Page/>}/>
   <Route path='/signin' element={<SigninPage/>}/>
   <Route path='/register' element={<RegistrationPage/>}/>
   
  </Routes>
 </BrowserRouter>
);