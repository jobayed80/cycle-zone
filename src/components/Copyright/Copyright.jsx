import React from 'react'
import { Grid, Container } from '@mui/material'
import { BiCopyright } from 'react-icons/bi'
import {BsGoogle} from 'react-icons/bs'
import {FcPhone} from 'react-icons/fc'
import {BsFacebook} from 'react-icons/bs'
import {IoLogoYoutube} from 'react-icons/io'
import {BsLinkedin} from 'react-icons/bs'
import {GrInstagram} from 'react-icons/gr'
import {FaTwitterSquare} from 'react-icons/fa'

import './Copyright.css'

const Copyright = () => {
    return (
        <div className='copy-part'>
            <div className="copyrights-main">
                <Container maxWidth="xl">
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className="copyrights-main-container">
                        <Grid item xs={6}>
                            <div className="left">
                                <div className="title">
                                    <h4>DIU,Cycle Zone <BiCopyright></BiCopyright>2023-2024</h4>
                                </div>
                                <div className="privacy">
                                    <h4>Privacy Policy</h4>
                                </div>
                                <div className="terms">
                                    <a href=""><h4>Terms of Use</h4></a>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={3}>

                        </Grid>
                        <Grid item xs={3} className="social">

                            <a href=""><BsGoogle></BsGoogle></a>
                            <a href=""><BsFacebook></BsFacebook></a>
                            <a href=""><IoLogoYoutube></IoLogoYoutube></a>
                            <a href=""><BsLinkedin></BsLinkedin></a>
                            <a href=""><GrInstagram></GrInstagram></a>
                            <a href=""><FaTwitterSquare></FaTwitterSquare></a>
                            
                        </Grid>

                    </Grid>
                </Container>
            </div>
        </div>
    )
}

export default Copyright