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


    // const [loader, setLoader] = useState(true);
    const [allReviews, setAllReviews] = useState([]);

    useEffect(() => {

        fetch(`http://localhost:5000/reviewsId?foodID=${_id}`)
            .then(res => res.json())
            .then(data => {
                // setLoader(false)
                setAllReviews(data)
            })
            .catch(err => console.log(err))
    }, [_id])

    // if (loader) {

    //     return <div className="text-center">
    //         <div role="status">
    //             <svg className="inline mr-2 w-16 h-12 text-white animate-spin dark:text-white fill-red-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
    //                 <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
    //                 <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
    //             </svg>
    //             <span className="sr-only">Loading...</span>
    //         </div>
    //     </div>

    // }

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
                allReviews.length > 0
                    ?
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
                                        allReviews.map(review => <AllreviewRow
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