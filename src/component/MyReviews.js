import React, { useContext, useEffect, useState } from 'react';
import { AuthUserContext } from '../Context/AuthContext';
import ReviewRow from './ReviewRow';
import Swal from 'sweetalert2';
import useTitle from '../Hooks/useTitle';


const MyReviews = () => {
    useTitle('MyReviews');

    const { user } = useContext(AuthUserContext);
    const [reviews, setReviews] = useState([]);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        fetch(`https://cloud-kitchen-server-six.vercel.app/reviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('cloud-token')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                setLoader(false)
                setReviews(data);
            })
    }, [user?.email])

    if (loader) {

        return <div className="text-center">
            <div role="status">
                <svg className="inline mr-2 w-16 h-12 text-white animate-spin dark:text-white fill-red-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
                <span className="sr-only">Loading...</span>
            </div>
        </div>

    }


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

                fetch(`https://cloud-kitchen-server-six.vercel.app/reviews/${id}`, {
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

                            <table className="table container p-5 border border-white my-10 text-white mx-auto lg:w-8/12">
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