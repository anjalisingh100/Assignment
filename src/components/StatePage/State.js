import { React, useEffect, useState } from "react";
import axios from "axios";
import { Bar } from 'react-chartjs-2';
import { useHistory } from "react-router-dom";
import './state.css';


function State() {
  let history = useHistory();
  let urlElements = window.location.href.split("/");
  let state_name = urlElements[4];
  state_name = decodeURI(state_name);

  const [totalData, setTotalData] = useState();
  const [districtData, setDistrictData] = useState({});

  function search(stateKey, myArray) {
    for (let i = 0; i < myArray.length; i++) {
      if (myArray[i].state === stateKey) {
        return myArray[i];
      }
    }
  }
  const handleClick = (districtName) => {
    history.push(`/state/${state_name}/district/${districtName}`);
  };

  useEffect(() => {
    axios
      .get(`https://api.covid19india.org/state_district_wise.json`)
      .then((res) => {
        setDistrictData(res.data[state_name]["districtData"]);
      });

    axios.get(`https://api.covid19india.org/data.json`).then((res) => {
      //   console.log(res.data.statewise);
      let arr = res.data.statewise;
      let resultObject = search(state_name, arr);
      setTotalData(resultObject);
    });
  }, []);
  
  console.log("districtData", districtData, districtData);
  
  Object.entries(districtData).map((key, value) => console.log(key[1]));

  return (
    <div className="bg">
    <div className="container">
      <h3 className="statestyle">{state_name}</h3>
      {totalData && (
          <Bar
          data={{
            labels: ['Active', 'Confirmed', 'Deaths','Recovered'],
            datasets: [
              {
                label:'active',
                backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)','rgba(200, 1, 0, 0.5)'],
                data: [totalData.active, totalData.confirmed,totalData.deaths,totalData.recovered],
              },
            ],
          }}
          options={{
            legend: { display: false },
            title: { display: true, text: `Current state in ${state_name}` },
          }}
            width={50}
	        height={10}
          />
    
      )}
      <br/>
      <br/>
      <h3 className="districtstyle">{state_name} District's Data</h3>
      <br/>
      <div className="districts">
        {Object.entries(districtData).map((key, value) => (
          <div className="boxc" key={key[0]}>
              <ul>
              <li className="alldistrict " onClick={() => handleClick(key[0])}>{key[0]}</li>
              </ul>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default State;