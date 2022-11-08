import React from 'react';


const ReviewRow = ({ review, handleDelete }) => {
    const { _id, foodName, message, rating } = review;



    return (
        <tr>
            <td>{foodName}</td>
            <td>{rating}</td>
            <td>{message}</td>
            <td>
                <button className='btn btn-warning'>Edit</button>
            </td>
            <td>
                <button onClick={() => handleDelete(_id)} className='btn btn-error'>Delete</button>
            </td>
        </tr>
    );
};

export default ReviewRow;