import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServicesCard from './ServicesCard';

const Services = () => {
    const services = useLoaderData();
    return (
        <div>
            {
                services.length === 0 &&
                <div class="h-screen bg-white">
                    <div class="flex justify-center items-center h-full">
                        <img class="h-16 w-16" src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif" alt=""/>
                    </div>
                </div>
            }
            <h2 className='text-3xl text-center text-orange-300 font-bold my-5'>All services from my cloud kitchen</h2>
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