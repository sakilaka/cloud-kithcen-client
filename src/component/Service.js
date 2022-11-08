import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ReviewForm from './ReviewForm';

const Service = () => {
    const service = useLoaderData();
    console.log(service);
    const {_id, name, price, rating, description, picture } = service[0];
    return (
        <div>
            <div className='bg-white p-10 container mx-auto'>
                <div className="card w-96 lg:w-7/12 bg-base-100 shadow-xl mx-auto">
                    <figure className="px-10 pt-10">
                        <img src={picture} alt="menu" className="rounded-xl h-48" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-indigo-300 text-2xl">{name}</h2>
                        <p>{description}</p>
                        <p className='text-red-400 font-bold'>Price : ${price}</p>
                        <p className='text-orange-400 font-bold'>Rating: {rating}</p>

                    </div>
                </div>
            </div>

            <div className='container w-7/12 my-10 border border-white p-10 mx-auto'>
                <h2 className='text-3xl text-center font-bold text-orange-400 my-5'>Please Review for {name}</h2>
                <ReviewForm id={_id}></ReviewForm>
            </div>
        </div>
    );
};

export default Service;