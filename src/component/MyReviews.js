import React, { useContext, useEffect, useState } from 'react';
import { AuthUserContext } from '../Context/AuthContext';

const MyReviews = () => {
    const { user } = useContext(AuthUserContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
    }, [user?.email])


    return (
        <div>
            <div>
                <h1 className='text-4xl my-5 text-center text-green-300 font-bold'>Your total reviews : {reviews.length}</h1>
                <div className="overflow-x-auto">

                    <table className="table container mx-auto lg:w-8/12 w-full">
                        <thead>
                            <tr>
                                <th>Food Name</th>
                                <th>Review</th>
                                <th>Action1</th>
                                <th>Action2</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                                <td>Blue</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyReviews;