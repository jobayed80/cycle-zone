import React from 'react'
import { Container, Grid } from '@mui/material'
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';


import './Navbar.css'

const Navbar = () => {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#000' : 'green',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        
    }));


    return (
        <div id='nav-part'>


            <div className="nav-top-part">

                <Container maxWidth="xl">

                    <header className="main-container-content">
                        <div className="nav-top-logo">
                            <img src="./assets/images/cycle.gif" alt="" />
                        </div>

                        <div className="nav-top-title">
                            <small>DIU, Cycle Zone</small>
                        </div>

                        <div className="nav-top-search">

                        </div>
                    </header>




                </Container>




            </div>


            <div id="nav-part">
            <Container maxWidth="xl">

                <div className="main-container-content-item">

                

                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={2}>
                            <Item className='nav-logo'>
                                <img src="./assets/images/diu-logo.png" alt="" />
                            </Item>
                        </Grid>
                        <Grid item xs={7}>

                        </Grid>
                        <Grid item xs={3}>
                            <Item className='nav-item'>
                                <nav>
                                    <ul>
                                        <li><a href="">Home</a></li>
                                        <li><a href="">Home</a></li>
                                        <li><a href="">Home</a></li>
                                        <li><a href="">Home</a></li>
                                        <li><a href="">Home</a></li>
                                    </ul>
                                </nav>
                            </Item>
                        </Grid>

                    </Grid>
               

                </div>
            </Container>
            </div>



        </div>
    )
}

export default Navbar