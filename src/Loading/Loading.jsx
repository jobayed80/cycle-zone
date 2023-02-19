

import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import GridLoader from "react-spinners/GridLoader";
import Home from '../pages/Home/Home';
import {Backdrop} from '@mui/material'


import './Loading.css'

const Loading = () => {

    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    // const [post, setPost] = useState(null)
    // const [open, setOpen] = React.useState(false);
    // const handleToggle = () => {
    //     setOpen(!open);
    //   };
    //   const handleClose = () => {
    //     setOpen(false);
    //   };
    // useEffect(() => {
    //     fetch("https://jsonplaceholder.typicode.com/posts/1")
    //         .then(response => response.json())
    //         .then(response => {
    //             const { body } = response
    //             console.log(body)
    //             setLoading(body)
    //         })
    // }, [])

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 4000)
    }, [])

    return (
        <div className='load'>

            {
                loading ?

                    <div className="loading">
                        
                        <GridLoader color={'#38D39F'} loading={loading} size={30} />
                       
                    </div>

                    :
                    navigate("/home")
            }



        </div>
    )
}

export default Loading