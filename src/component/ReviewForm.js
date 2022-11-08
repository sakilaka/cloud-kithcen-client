import React from 'react';

const ReviewForm = () => {
    return (
        <div className='container'>
            <form action="">
                <input type="text" placeholder="Type your name" className="input my-2 input-bordered input-warning lg:w-8/12 w-full" />
                <input type="text" placeholder="your photo URL" className="input my-2 input-bordered input-warning lg:w-8/12 w-full" />
                <input type="text" placeholder="Rating" className="input my-2 input-bordered input-warning lg:w-8/12 w-full" />
                <textarea className="textarea textarea-warning lg:w-8/12 w-full my-2 h-32" placeholder="please say something about my home made food item."></textarea>
                <p>
                    <button className='btn btn-warning btn-outline'>Submit</button>
                </p>
            </form>
        </div>
    );
};

export default ReviewForm;