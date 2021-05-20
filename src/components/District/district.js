import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Bar } from 'react-chartjs-2';
import './district.css';


function district() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    let urlElements = window.location.href.split("/");
    let state_name = urlElements[4];
    let district_name = urlElements[6]
    state_name = decodeURI(state_name);
    district_name = decodeURI(district_name)


    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [districtData, setDistrictData] = useState({});

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        axios
            .get(`https://api.covid19india.org/state_district_wise.json`)
            .then((res) => {
                console.log(res.data);
                console.log(res.data[state_name])
                let districtDataCopy = res.data[state_name]["districtData"][district_name]
                console.log("dddaa", districtDataCopy)
                setDistrictData(districtDataCopy);
            });
    }, []);

    return (
      <div >
            <div class="area" >
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
  
            <h2 className="districtheader">{district_name} </h2>
            <div className="background m-5">
            <Bar
            data={{
            labels: ['Active', 'Confirmed', 'Deaths','Recovered'],
            datasets: [
              {
                label: 'Active',
                backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                data: [districtData.active, districtData.confirmed,districtData.deaths,districtData.recovered],
              },
            ],
          }}
          options={{
            legend: { display: false },
            title: { display: true, text: `Current state in ${district_name}` },
          }}
            width={50}
	        height={10}
          />
          </div>
          </div>
          </div>
      
    

    )
}

export default district;
