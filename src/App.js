
import './App.css';
import Card from './components/Card/Card';
import'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/navbar';
import React ,{Component,lazy,Suspense} from 'react';


function App() {

  const Home=lazy(()=>import('./components/HomePage/Home'))
  return (
    <div className="area">
     <Navbar/>
      <Card/>
      <Suspense fallback={<div>Loading ......</div>}>
       <Home/>
      </Suspense>
      
    </div>
  );
}

export default App;
