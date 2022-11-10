import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';

const ServicesCard = ({ service }) => {
    const { _id, picture, price, description, name } = service;
    return (
        <div>
            <div className="card w-[350px] lg:w-96 bg-base-100 my-3 shadow-xl">

                <PhotoProvider>
                    <div className="foo px-10 pt-10">
                        <PhotoView src={picture}>
                            <img className='h-48 rounded-2xl' src={picture} alt="" />
                        </PhotoView>
                    </div>
                </PhotoProvider>

                <div className="card-body items-center text-center">
                    <h2 className="card-title text-indigo-300 text-2xl">{name}</h2>
                    <p>{description.slice(0, 100) + '....'}</p>
                    <p className='text-red-400 font-bold'>Price : ${price}</p>
                    <div className="card-actions">
                        <Link to={`/services/${_id}`}><button className="btn btn-warning btn-outline">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;