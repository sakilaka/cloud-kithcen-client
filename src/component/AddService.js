import React from 'react';
import Swal from 'sweetalert2';
import useTitle from '../Hooks/useTitle';


const AddService = () => {
    useTitle('AddServices');

    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const photoURL = form.photo.value;
        const message = form.message.value;

        const service = {
            picture: photoURL,
            name: name,
            rating: rating,
            price: price,
            description: message
        }

        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    form.reset();
                    Swal.fire(
                        'Good job!',
                        'Review added!',
                    )
                }
            })

    }


return (
    <div>
        <h1 className='text-4xl text-center my-10 font-bold text-orange-400'>Add Food Menu Here</h1>
        <form onSubmit={handleAddService} className='lg:w-9/12 w-full p-10 mx-auto' action="">
            <input name='name' type="text" placeholder="Food name" className="input my-2 input-bordered input-success w-full" />
            <input type="text" name='photo' placeholder="Food photo URL" className="input my-2 input-bordered input-success w-full" />
            <input name='rating' type="text" placeholder="Rating" className="input my-2 input-bordered input-success w-full" />
            <input name='price' type="number" placeholder="Price" className="input my-2 input-bordered input-success w-full" />
            <textarea name='message' className="textarea textarea-success w-full my-2 h-32" placeholder="Description"></textarea>
            <p className='text-center'>
                <button className='btn btn-success btn-outline'>Submit</button>
            </p>
        </form>
    </div>
);
};

export default AddService;