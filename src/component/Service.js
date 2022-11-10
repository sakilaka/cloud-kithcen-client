import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthUserContext } from '../Context/AuthContext';
import useTitle from '../Hooks/useTitle';
import AllreviewRow from './AllreviewRow';
import ReviewForm from './ReviewForm';

const Service = () => {
    useTitle('service_details');

    const { user } = useContext(AuthUserContext);
    const service = useLoaderData();
    console.log(service);
    const { _id, name, price, rating, description, picture } = service[0];


    // http://localhost:5000/reviews?foodID=63695a0346ba50945d7834bd

    const [reviews, setReviews] = useState([]);

    useEffect(() => {

        fetch(`http://localhost:5000/reviews?foodID=${_id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setReviews(data)
            })
            .catch(err => console.log(err))
    }, [_id])

    return (
        <div>
            <div className='bg-white lg:py-1 py-10 my-5 lg:p-10 container mx-auto'>
                <div className="card w-[350px] lg:w-7/12 bg-base-100 shadow-xl mx-auto">
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


            {
                reviews.length > 0 ?
                    <div className='my-10 container mx-auto'>
                        <h1 className='text-4xl text-center font-bold text-sky-400 my-10'>All review for {name}</h1>
                        <div className="overflow-x-auto">
                            <table className="table border border-white lg:w-8/12 mx-auto w-full">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Image</th>
                                        <th>Message</th>
                                        <th>Rating</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        reviews.map(review => <AllreviewRow
                                            key={review._id}
                                            review={review}
                                        ></AllreviewRow>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    :
                    <div className='text-5xl border container mx-auto border-white p-10 my-52 text-center text-blue-300'>
                        No reviews for {name}!!
                    </div>
            }


            {
                user?.uid ?
                    <div className='container w-full lg:w-7/12 my-10 border border-white p-10 mx-auto'>
                        <h2 className='text-3xl text-center font-bold text-orange-400 my-5'>Please Review for {name}</h2>
                        <ReviewForm id={_id} foodName={name}></ReviewForm>
                    </div>
                    :
                    <div className='container mx-auto border border-white my-5'>
                        <h2 className='text-3xl text-center font-bold text-orange-400 my-5'>Please Review for {name}</h2>
                        <h1 className='text-4xl my-36 text-center font-bold'>You must login first for review.Please <Link className='text-blue-500' to='/login'>login!</Link> </h1>
                    </div>

            }

        </div>
    );
};

export default Service;