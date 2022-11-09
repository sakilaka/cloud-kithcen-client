import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthUserContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';


const UpdateReviewForm = () => {
    const { user } = useContext(AuthUserContext);
    const review = useLoaderData();
    const { _id, foodName, rating, message } = review;


    const handlePlaceUpdateReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = user?.displayName;
        const photoURL = user?.photoURL;
        const rating = form.rating.value;
        const message = form.message.value;

        const updateReview = {
            foodID: _id,
            foodName: foodName,
            email: user?.email,
            name: name,
            photoURL: photoURL,
            rating: rating,
            message: message
        }

        fetch(`http://localhost:5000/reviews/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateReview)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    form.reset();
                    Swal.fire(
                        'Good job!',
                        'Review Updated!',
                    )
                }
            })

    }

    return (
        <div className='container mx-auto'>
            <h2 className='text-3xl text-center text-lime-300 my-10'>Update review for {foodName}</h2>
            <form onSubmit={handlePlaceUpdateReview} className='p-10' action="">
                <input name='name' defaultValue={user?.displayName} readOnly type="text" placeholder="Type your name" className="input my-2 input-bordered input-warning w-full" />
                <input type="text" defaultValue={user?.photoURL} readOnly placeholder="your photo URL" className="input my-2 input-bordered input-warning w-full" />
                <input name='rating' defaultValue={rating} type="text" placeholder="Rating" className="input my-2 input-bordered input-warning w-full" />
                <textarea name='message' defaultValue={message} className="textarea textarea-warning w-full my-2 h-32" placeholder="please say something about my home made food item."></textarea>
                <p className='text-center'>
                    <button className='btn btn-warning btn-outline'>Update</button>
                </p>
            </form>
        </div>
    );
};

export default UpdateReviewForm;