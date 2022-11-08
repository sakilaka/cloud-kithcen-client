import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServicesCard from './ServicesCard';

const Services = () => {
    const services = useLoaderData();
    return (
        <div>
            <h2 className='text-3xl text-orange-300 font-bold my-5'>All services from my cloud kitchen</h2>
            <div className='container grid lg:grid-cols-2 grid-cols-1 gap-20 my-12 bg-slate-100 pl-5 py-10 pr-5 lg:pl-28 lg:py-20 mx-auto'>
                {
                    services.map(service => <ServicesCard 
                        key={service._id}
                        service={service}
                    ></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;