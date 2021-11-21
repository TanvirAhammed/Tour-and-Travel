import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/Banner1.jpg';
import banner2 from '../../../images/banner/Banner2.jpg';
import banner3 from '../../../images/banner/Banner3.jpg';
import banner4 from '../../../images/banner/Banner4.jpg';
import './Banner.css'

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 sizing"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Travel With Us
                            For The Best Deal</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img

                        className="d-block w-100 sizing"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 >Travel With UK
                            For The Best Deal</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 sizing"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Travel With Nepal
                            For The Best Deal</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 sizing"
                        src={banner4}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className='name_color'>Tanvir's Tour & Travels (TTT)</h3>
                        <p>We have to many facalities for Tour.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;