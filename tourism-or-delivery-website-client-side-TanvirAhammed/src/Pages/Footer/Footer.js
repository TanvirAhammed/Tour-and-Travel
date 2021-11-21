import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div >

            <footer id="footer" class="footer-1">
                <div class="main-footer widgets-dark typo-light">
                    <div class="container">
                        <div class="row">

                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="widget subscribe no-box">
                                    <h5 class="widget-title">Tanvir's Tour & Travels(TTT)<span></span></h5>
                                    <p>On behalf of Tanvir's Tours & Travels, hotel.com.bd is committed to offering an informative, user-friendly website with competitive rates of various hotels, guest house and resorts of Bangladesh ... </p>
                                </div>
                            </div>

                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="widget no-box">
                                    <h5 class="widget-title">Quick Links<span></span></h5>
                                    <ul class="thumbnail-widget">
                                        <li>
                                            <div class="thumb-content"><a href="../Shared/Header/Header.js">Home</a></div>
                                        </li>

                                        <li>
                                            <div class="thumb-content"><a href="#.">Success Stories</a></div>
                                        </li>
                                        <li>
                                            <div class="thumb-content"><a href="#.">Event/Tickets</a></div>
                                        </li>
                                        <li>
                                            <div class="thumb-content"><a href="#.">News</a></div>
                                        </li>
                                        <li>
                                            <div class="thumb-content"><a href="#.">Lifestyle</a></div>
                                        </li>
                                        <li>
                                            <div class="thumb-content"><a href="../About/About.js">About</a></div>
                                        </li>

                                    </ul>
                                </div>
                            </div>

                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="widget no-box">
                                    <h5 class="widget-title">Get Started<span></span></h5>
                                    <p>Get access to your full Training and Marketing Suite.</p>
                                    <a class="btn" href="" target="_blank">Subscribe Now</a>
                                </div>
                            </div>

                            <div class="col-xs-12 col-sm-6 col-md-3">

                                <div class="widget no-box">
                                    <h5 class="widget-title">Contact Us<span></span></h5>

                                    <p><a href="mailto:info@domain.com" title="glorythemes">TTT@gmail.com</a></p>
                                    <ul class="social-footer2">
                                        {/* ICON set */}
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div class="footer-copyright">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 text-center">
                                <p>Copyright Tanvir's Tour & Travels (TTT) © 2021. All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default Footer;