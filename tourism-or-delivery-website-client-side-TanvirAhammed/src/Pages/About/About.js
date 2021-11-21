import React from 'react';
import './About.css';
import tour from '../../images/tour.jpg';

const About = () => {
    return (
        <div>
            <h1 >Tanvir's TOURS & TRAVELS <span className='header_name'>(TTT)</span></h1>
            <p>  To create and provide a total Travel Management Package</p>


            <div className='company'>
                <div>
                    <h3>The Company</h3>
                    <br />
                    <br />
                    <p>On behalf of Tanvir's Tours & Travels, hotel.com.bd is committed to offering an informative, user-friendly website with competitive rates of various hotels, guest house and resorts of Bangladesh . Our goal is to provide business and leisure travelers worldwide with a pleasant, efficient and cost-effective way to book hotel accommodation.

                        Hotel.com.bd is specialized in offering you the best hotel deal, which is always up-to-date to find out the most charming independent hotels for individual person's choice. On this latest version of our web site, we have created a user-friendly site which clearly presented most of the major hotels profiles with detailed information about their location, services, and facilities along with room profiles where the travelers can compare different hotels facilities and easily take the decision to choose which hotel will be best according to their requirement.



                        We know that today's travelers need useful information and professional consultation, regardless of whether they stay is for business or for leisure. This is why both our web site and our professional team are at your service. Do not hesitate to contact us.

                        Tanvir's Tours & Travels is a Tour Operator and Travel Agency being managed by a team of professionals with several years of experience in the field of Tours & Travel trade and in the field of hospitality in Bangladesh .


                        As a Bangladeshi Tours & Travel Agency, we are offering service of International & Domestic Air Ticketing on different Airlines (Online/Offline) and to different destinations. Tanvir's Tours & Travels also under take Hotel & Ticket Reservations all over Bangladesh , Transportations for ground handling and Hotel reservations. Winux Tours & Travels always intend to provide the best possible Hotel accommodation to our clients in different destinations at very reasonable cos</p>
                </div>

                <div>
                    <img src={tour} alt="" />
                </div>
            </div>

        </div>
    );
};

export default About;