import React, { useContext } from 'react';
import { AuthUserContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';


const ReviewForm = ({ id }) => {
    const { user } = useContext(AuthUserContext);

    const handlePlaceReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = user?.displayName;
        const photoURL = user?.photoURL;
        const rating = form.rating.value;
        const message = form.message.value;

        const review = {
            food: id,
            email: user?.email,
            name: name,
            photoURL: photoURL,
            rating: rating,
            message: message
        }

        fetch('http://localhost:5000/reviews',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.acknowledged){
                form.reset();
                Swal.fire(
                    'Good job!',
                    'Review added!',
                  )
            }
        })
        
    }

    return (
        <div className='container mx-auto'>
            <form onSubmit={handlePlaceReview} className='' action="">
                <input name='name' defaultValue={user?.displayName} readOnly type="text" placeholder="Type your name" className="input my-2 input-bordered input-warning w-full" />
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