import React from 'react';

const AllreviewRow = ({review}) => {
    const {name, photoURL, message, rating} = review;
    return (
        <tr>
            <th>{name}</th>
            <td>
                <img className='w-16 h-16' src={photoURL} alt="" />
            </td>
            <td>{rating}</td>
            <td>{message}</td>
        </tr>
    );
};

export default AllreviewRow;