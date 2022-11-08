import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import kacchi from '../images/kacchi.jpeg';
import ServicesCard from './ServicesCard';

const Home = () => {
    const services = useLoaderData();
    return (
        <div className='my-10 container mx-auto'>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-20'>
                <div>
                    <img className='h-96 w-full p-8' src={kacchi} alt="" />
                </div>
                <div className='text-justify'>
                    <p className='text-2xl font-bold p-5 lg:p-1 text-blue-400 lg:mt-[130px] mt-3 ml-5'>Here you all food item for Lunch and Dinner. <br />You also get Snacks item form here. <br /><span className='text-xl text-red-500'>Thank You for your Support.</span></p>
                </div>

            </div>

            <div className='grid lg:grid-cols-2 grid-cols-1 gap-20 my-12 bg-slate-100 pl-5 py-10 pr-5 lg:pl-28 lg:py-20 mx-auto'>
                {
                    services.map(service => <ServicesCard
                        key={service._id}
                        service={service}
                    ></ServicesCard>)
                }
            </div>
            <div className='text-center'>
               <Link to='/services'><button className="btn btn-success btn-outline">See More</button></Link>
            </div>
        </div>
    );
};

export default Home;
