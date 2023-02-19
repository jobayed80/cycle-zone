import React from 'react'
import './Footer.css'
import { Container, Grid } from '@mui/material';
import {FaFacebook}  from 'react-icons/fa'
import {FaLinkedin}  from 'react-icons/fa'
import {AiFillTwitterCircle}  from 'react-icons/ai'
import {AiFillYoutube}  from 'react-icons/ai'
import {AiOutlineInstagram}  from 'react-icons/ai'

// import DIUlogo from '../img/diu-logo.png'

const Footer = () => {
    return (
        <div className='footer-part'>



            <Container maxWidth="xl" className="main-footer">
                <div className="footer-logo-title">
                        <div className="image-logo">
                            <img src="./assets/images/diu-logo.png" alt="" />
                            
                        </div>
                        

                </div>
                <Grid container spacing={2} className="footer">
                    <Grid item xs={3} className="footer-content">
                        <h1>Social Media</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita exercitationem recusandae id, vel iure placeat quasi ad quibusdam omnis, explicabo porro hic totam sunt rerum fugiat cumque sit nulla!</p>
                        <div className="social">
                            <ul>
                                <li><a href=""><FaFacebook></FaFacebook></a></li>
                                <li><a href=""><FaLinkedin> </FaLinkedin></a></li>
                                <li><a href=""><AiFillTwitterCircle></AiFillTwitterCircle></a></li>
                                <li><a href=""><AiFillYoutube></AiFillYoutube></a></li>
                                <li><a href=""><AiOutlineInstagram></AiOutlineInstagram></a></li>
                            </ul>
                        </div>
                    </Grid>
                    <Grid item xs={3} className="footer-content">
                        <h1>Footer1</h1>
                    </Grid>
                    <Grid item xs={3} className="footer-content">
                        <h1>Footer1</h1>
                    </Grid>
                    <Grid item xs={3} className="footer-content">
                        <h1>Footer1</h1>
                    </Grid>

                </Grid>
            </Container>


        </div>
    )
}

export default Footer