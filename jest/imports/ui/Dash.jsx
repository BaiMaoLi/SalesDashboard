import React from 'react';
import { useState } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { LinksCollection } from '../api/links';
import { Container, Row, Col } from 'react-grid-system';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import './dash.css'
import ReactSpeedometer from "react-d3-speedometer"
import Calendar from "react-calendar";

// import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

//Change Date Method 
const changeDate = (e) => {
  setDateState(e)
}

const labels = ['Employee 1', 'Employee 2', 'Employee 3', 'Employee 4', 'Employee 5', 'Employee 6', 'Employee 7'];

// const [date, setDate] = useState(new Date());

export const data = {
  labels,
  datasets: [
    // {
    //   label: 'Dataset 1',
    //   data: [344, 455, 566, 233, 256, 234, 657],
    //   backgroundColor: 'rgba(255, 99, 132, 0.5)',
    // },
    {
      label: 'Discounts Given By Employees',
      data: [344, 455, 566, 233, 256, 234, 657],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};


export const options = {
  responsive: true,   
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

style={

}



export const Dash = () => {
  const links = useTracker(() => {
    return LinksCollection.find().fetch();
  });

  return (
    <div>
      
      <Container>
        <center>
        
        
        <h1 class="blue">
        <strong> <b>  Sales Performace Dashboard </b></strong>
        <hr></hr>

        </h1>
          
          
        </center>
  <Row>
    <Col sm={8}>
      <Row>
        <Col sm={2}>
          <Row>
            <h1>000</h1>
            </Row>  
            <Row>
              <h5>
              New Leads 
              this month
              </h5>
            </Row>

        </Col>

        <Col sm={2}>
          <Row>
            <h1>000</h1>
            </Row>  
            <Row>
              <h5>
              New Leads 
              this month
              </h5>
            </Row>
            
        </Col>

        <Col sm={2}>
          <Row>
            <h1>000</h1>
            </Row>  
            <Row>
              <h5>
              New Leads 
              this month
              </h5>
            </Row>
            
        </Col>

        <Col sm={2}>
          <Row>
            <h1>000</h1>
            </Row>  
            <Row>
              <h5>
              New Leads 
              this month
              </h5>
            </Row>
            
        </Col>

        <Col sm={2}>
          <Row>
            <h1>000</h1>
            </Row>  
            <Row>
              <h5>
              New Leads 
              this month
              </h5>
            </Row>
            
        </Col>

        <Col sm={2}>
          <Row>
            <h1>000</h1>
            </Row>  
            <Row>
              <h5>
              New Leads 
              this month
              </h5>
            </Row>
            
        </Col>  
      </Row> 
    </Col>
      <Col sm={4}>
        <div style={{width:"100%", padding:"1vw 1vw 2vw 2vw", paddingRight:"2vw", backgroundColor:"rgba(63, 172, 235, 0.5)", alignContent:'center', color:"black", borderRadius:"1vw", borderColor:"black", borderWidth:"10px",}}>
        
  <h2><center>My Tasks </center></h2>

  <Row>
    

    <Col>
    <Row>
      <h3>
      Date
      </h3>
      
    </Row>
    <Row>
      data<br />
      data<br />
      data 

    </Row>
    </Col>

    <Col>
    <Row>
      
    <h3>
    Priority
      </h3>
      
    </Row>
    <Row>
      data
      <br />
      data
      <br />
      data 
      
    </Row>
    </Col>

    <Col>
    <Row>
      
    <h3>
    Subject
      </h3>
      
    </Row>
    <Row>
      data
      <br />
      data
      <br />
      data 
      
    </Row>
    </Col>

  </Row>

        </div> 
      </Col>
  </Row>

  <Row>
  
        <Col sm={6}>
          <Row>
            <Bar options={options} data={data} /> 
          </Row>

         <br /><br /><br />

<Row>

          <div className='calendar-container'>
            <Calendar 
              // value={dateState}
              // onChange={changeDate}
            />
            </div>


          </Row>
        </Col>
        
  <Col sm={6}>

  <br /><br /><br />
    <Row>

    <Col sm={6}>
  <ReactSpeedometer
    value={77}
    currentValueText="GPV Gari W : ${value}"
    customSegmentLabels={[
      {
        text: "0",
        position: "INSIDE",
        color: "#555",
      },
      {
        text: "200K",
        position: "INSIDE",
        color: "#555",
      },
      {
        text: "400K",
        position: "INSIDE",
        color: "#555",
        fontSize: "19px",
      },
      {
        text: "600K",
        position: "INSIDE",
        color: "#555",
      },
      {
        text: "800K",
        position: "INSIDE",
        color: "#555",
      },
    ]}
  />
    </Col>
  <Col sm={6}>
  <ReactSpeedometer
    value={77}
    currentValueText="GPV Gari W : ${value}"
    customSegmentLabels={[
      {
        text: "0",
        position: "INSIDE",
        color: "#555",
      },
      {
        text: "200K",
        position: "INSIDE",
        color: "#555",
      },
      {
        text: "400K",
        position: "INSIDE",
        color: "#555",
        fontSize: "19px",
      },
      {
        text: "600K",
        position: "INSIDE",
        color: "#555",
      },
      {
        text: "800K",
        position: "INSIDE",
        color: "#555",
      },
    ]}
  />
  </Col>

    </Row>

    <Row>
    <Col sm={6}>
  <ReactSpeedometer
    value={77}
    currentValueText="GPV Gari W : ${value}"
    customSegmentLabels={[
      {
        text: "0",
        position: "INSIDE",
        color: "#555",
      },
      {
        text: "200K",
        position: "INSIDE",
        color: "#555",
      },
      {
        text: "400K",
        position: "INSIDE",
        color: "#555",
        fontSize: "19px",
      },
      {
        text: "600K",
        position: "INSIDE",
        color: "#555",
      },
      {
        text: "800K",
        position: "INSIDE",
        color: "#555",
      },
    ]}
  />
  </Col>
  <Col sm={6}>
  <ReactSpeedometer
    value={77}
    currentValueText="GPV Gari W : ${value}"
    customSegmentLabels={[
      {
        text: "0",
        position: "INSIDE",
        color: "#555",
      },
      {
        text: "200K",
        position: "INSIDE",
        color: "#555",
      },
      {
        text: "400K",
        position: "INSIDE",
        color: "#555",
        fontSize: "19px",
      },
      {
        text: "600K",
        position: "INSIDE",
        color: "#555",
      },
      {
        text: "800K",
        position: "INSIDE",
        color: "#555",
      },
    ]}
  />
  </Col>

    </Row>


    <Row>

<Col sm={6}>
<ReactSpeedometer
  value={77}
  currentValueText="GPV Jake K : ${value}"
  customSegmentLabels={[
    {
      text: "0",
      position: "INSIDE",
      color: "#555",
    },
    {
      text: "200K",
      position: "INSIDE",
      color: "#555",
    },
    {
      text: "400K",
      position: "INSIDE",
      color: "#555",
      fontSize: "19px",
    },
    {
      text: "600K",
      position: "INSIDE",
      color: "#555",
    },
    {
      text: "800K",
      position: "INSIDE",
      color: "#555",
    },
  ]}
/>
</Col>

<Col sm={6}>
<ReactSpeedometer
  value={77}
  currentValueText="GPV Gari W : ${value}"
  customSegmentLabels={[
    {
      text: "0",
      position: "INSIDE",
      color: "#555",
    },
    {
      text: "200K",
      position: "INSIDE",
      color: "#555",
    },
    {
      text: "400K",
      position: "INSIDE",
      color: "#555",
      fontSize: "19px",
    },
    {
      text: "600K",
      position: "INSIDE",
      color: "#555",
    },
    {
      text: "800K",
      position: "INSIDE",
      color: "#555",
    },
  ]}
/>
</Col>
</Row>
  

  </Col>
  
{/* Speedometers */}

        <Col sm={12}>

<Row>
  

  
</Row>


           
        </Col>

        </Row>
      
</Container>
      
    </div>
  );
};
