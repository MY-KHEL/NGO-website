import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HeroSection from './components/home';
import ShowContent from './components/statement';
import About from './components/about';
import Project from './components/project';
import Form from './components/forms';
import Footer from './components/footer';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HeroSection/>
    <ShowContent/>
    <About/>
    <Project/>
    <Form/>
    <Footer />
  </React.StrictMode>
    
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
