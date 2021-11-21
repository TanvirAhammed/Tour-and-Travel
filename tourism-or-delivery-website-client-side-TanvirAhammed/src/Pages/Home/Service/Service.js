import React from 'react';
import './Service.css';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    // const { service } = props;
    const { _id, name, price, description, img } = service;
    return (
        <div className="service pb-3 ">
            <img className='images' src={img} alt="" />
            <h3>{name}</h3>

            <p className="px-3">{description}</p>

            <div className='price_books'>

                <div>
                    <Link to={`/booking/${_id}`}>
                        <button className="btn btn-warning">Book {name.toLowerCase()}</button>
                    </Link>
                </div>
                <div>
                    <h5>Price: {price}</h5>
                </div>
            </div>

        </div>
    );
};

export default Service;