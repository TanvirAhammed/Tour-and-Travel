import React, { useEffect, useState } from 'react';

import './Manage.css'

const ManageServices = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://cryptic-spire-77237.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    })
    const handleDelete = id => {
        const url = `https://cryptic-spire-77237.herokuapp.com/services/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('Deleted Successfully')
                    const remaining = services.filter(service => service._id !== id)
                    setServices(remaining);
                }


            })

    }
    return (

        <div>
            <h2>Welcome to Manage Services</h2>

            <div className="manage-container pb-5">

                {
                    services.map(service => <div key={service._id}>

                        <h3>{service.name}</h3>
                        <img className='images_width' src={service.img} alt="" /><br /><br />
                        <button className='btn-style' onClick={() => handleDelete(service._id)}>Delete</button>


                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageServices;