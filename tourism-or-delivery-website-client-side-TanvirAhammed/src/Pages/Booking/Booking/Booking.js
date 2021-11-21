import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Booking.css'

const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});

    useEffect(() => {
        fetch(`https://cryptic-spire-77237.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (

        <div className='place_order'>
            <h2>Details of {service.name}</h2>
            <img src={service.img} alt="" />
            <h2>Your Booking ID is: {serviceId}</h2>
            <h1>Total Cost:{service.price}</h1>
            <p>{service.description}</p>
            <button>Place Order</button>
        </div>

    );
};

export default Booking;