import React from 'react';

const ServicesCard = ({ service }) => {
    const { _id, picture, price, description, name } = service;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={picture} alt="Shoes" className="rounded-xl h-48" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-indigo-300 text-2xl">{name}</h2>
                    <p>{description.slice(0, 100) + '....'}</p>
                    <p className='text-red-400 font-bold'>Price : ${price}</p>
                    <div className="card-actions">
                        <button className="btn btn-warning btn-outline">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;