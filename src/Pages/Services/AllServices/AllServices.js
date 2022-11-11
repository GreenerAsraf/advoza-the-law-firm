import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import DetailService from '../DetailService';
import ServiceCard from '../ServiceCard/ServiceCard';

const AllServices = () => {
    const services =useLoaderData();
    
    return (
       
        <div> 
                <h2>All Services that we provide</h2>
         <div  className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
         {
                services.map(service=><DetailService
                    key={service._id}
                    service={service}
                ></DetailService>)
            } 
         </div>
             
        </div>
       
    );
};

export default AllServices;