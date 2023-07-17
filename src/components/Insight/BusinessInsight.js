import React from 'react'
import ceo from '../../ASSETS/ceo.JPG';
import './BusinessInsight.css'

const BusinessInsight = () => {
  return (
    <div className='Container'>
    <div className='ceo'>
        <div className='ceopicdiv'>
            <br></br>
            <h2>From The desk of CEO</h2>
        <img className='ceoimage' src={ceo} ></img>
        <h2>Arinha Adhikari</h2>
        <h5>Chief Exegutive Officer<br></br>
        Coalite MMS Pvt Ltd</h5>
        </div>


        <div className='insightdiv'>
            <h2>Business Insights</h2>
            <p>
            Procurement Optimization: Our system enables businesses to automate and streamline the procurement process,
             ensuring timely and cost-effective acquisition of materials. It facilitates seamless collaboration with suppliers,
              reduces lead times, and minimizes inventory holding costs.
              <br></br>
              <br></br>

            Inventory Tracking and Management: With our Material Management System, you gain real-time visibility into your inventory levels,
             locations, and usage. This empowers you to make data-driven decisions, prevent stockouts, eliminate excess inventory, 
             and improve cash flow.
             <br></br>
             <br></br>

            Warehouse and Distribution Management: Efficiently managing warehouses and distribution centers is critical to meeting customer 
            demands. Our system provides robust tools to optimize storage, automate order fulfillment, and enhance logistics, ensuring timely 
            deliveries and customer satisfaction.
            <br></br>
            <br></br>

            Analytics and Reporting: Make sense of your material data with our powerful analytics and reporting tools. 
            Track key performance indicators, identify trends, forecast demand, and make informed decisions to continuously
             optimize your material management processes.
            </p>
        </div>
    


    </div>

  
    </div>
   )
}

export default BusinessInsight