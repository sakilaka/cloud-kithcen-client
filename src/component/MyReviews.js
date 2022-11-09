import React, { useContext, useEffect, useState } from 'react';
import { AuthUserContext } from '../Context/AuthContext';
import ReviewRow from './ReviewRow';
import Swal from 'sweetalert2';
import useTitle from '../Hooks/useTitle';


const MyReviews = () => {
    useTitle('MyReviews');

    const { user } = useContext(AuthUserContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`,{
            headers:{
                authorization: `Bearer ${localStorage.getItem('cloud-token')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
    }, [user?.email])


    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/reviews/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount === 1) {
                            Swal.fire(
                                'Deleted!',
                                'Your review has been deleted.',
                                'success'
                            )
                            const remaining = reviews.filter(review => review._id !== id)
                            setReviews(remaining);
                        }
                    })

            }
        })
    }



    return (
        <div>
            {
                reviews.length > 0 
                ? <div>
                <h1 className='text-4xl my-5 text-center text-green-300 font-bold'>Your total reviews : {reviews.length}</h1>
                <div className="overflow-x-auto">

                    <table className="table container my-10 text-white mx-auto lg:w-8/12 w-full">
                        <thead>
                            <tr>
                                <th>Food Name</th>
                                <th>Review</th>
                                <th>Rating</th>
                                <th>Action1</th>
                                <th>Action2</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                reviews.map(review => <ReviewRow
                                    key={review._id}
                                    review={review}
                                    handleDelete={handleDelete}
                                ></ReviewRow>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            :
            <div className='text-5xl my-52 text-center text-rose-500'>
                No reviews were added!!
            </div>

            }
           
        </div>
    );
};

export default MyReviews;