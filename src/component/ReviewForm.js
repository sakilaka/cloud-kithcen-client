import React, { useContext } from 'react';
import { AuthUserContext } from '../Context/AuthContext';

const ReviewForm = ({ id }) => {
    const { user } = useContext(AuthUserContext);

    const handlePlaceReview = (event) => {
        event.preventDefault();
        const form = event.form;
        const name = form.name.value;
        const photoURL = user?.photoURL || 'unregistered';
        const rating = form.rating.value;
        const message = form.message.value;

        const review = {
            food: id,
            name: name,
            photoURL: photoURL,
            rating: rating,
            message: message
        }
    }

    return (
        <div className='container mx-auto'>
            <form onSubmit={handlePlaceReview} className='' action="">
                <input name='name' type="text" placeholder="Type your name" className="input my-2 input-bordered input-warning w-full" />
                <input type="text" defaultValue={user?.photoURL} readOnly placeholder="your photo URL" className="input my-2 input-bordered input-warning w-full" />
                <input name='rating' type="text" placeholder="Rating" className="input my-2 input-bordered input-warning w-full" />
                <textarea name='message' className="textarea textarea-warning w-full my-2 h-32" placeholder="please say something about my home made food item."></textarea>
                <p className='text-center'>
                    <button className='btn btn-warning btn-outline'>Submit</button>
                </p>
            </form>
        </div>
    );
};

export default ReviewForm;