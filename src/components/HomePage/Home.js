import { React, useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import './home.css';
import'bootstrap/dist/css/bootstrap.min.css';
import {lazyload} from 'react-lazyload';




function Home() {
  let history = useHistory();

  const [state, setState] = useState({});
  useEffect(() => {
    axios
      .get(`https://api.covid19india.org/state_district_wise.json`)
      .then((res) => {
        setState(res.data);
      });
  }, []);

  const handleClick = (value) => {
    history.push(`/state/${value}`);
  };
  return (
    <div className="back">
    <div className="container">
      
      <h1 className="card mt-5 " style={{backgroundColor:'#F8F9FA',color:'#36D4C1',textAlign:'center' }} ><span >List of States </span></h1>
      <br/>
      <br/>
      <div className="states">
        {Object.entries(state).map((key, value) => (
          <div className="box" key={key[0]}>   
              <ul style={{listStyleType:'none'}}>
              <li className="listState" onClick={() => handleClick(key[0])}>{key[0]}</li>
            </ul> 
              
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Home;