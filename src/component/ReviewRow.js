import React from 'react';
import { Link } from 'react-router-dom';


const ReviewRow = ({ review, handleDelete }) => {
    const { _id, foodName, message, rating } = review;

    return (
        <tr>
            <td>{foodName}</td>
            <td>{rating}</td>
            <td>{message}</td>
            <td>
               <Link to={`/update/${_id}`}><button className='btn btn-warning'>Edit</button></Link>
            </td>
            <td>
                <button onClick={() => handleDelete(_id)} className='btn btn-error'>Delete</button>
            </td>
        </tr>
    );
};

export default ReviewRow;