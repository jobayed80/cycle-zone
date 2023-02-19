import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Container, Grid, Box, TextField, FormControl, InputLabel, IconButton, Input, InputAdornment, Alert, Collapse } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import CloseIcon from '@mui/icons-material/Close';
import { FcGoogle } from 'react-icons/fc'
import { FcPhone } from 'react-icons/fc'
import './Registration.css'
import Footer from '../../components/Footer/Footer'
import Copyright from '../../components/Copyright/Copyright';

import { Link, useNavigate } from 'react-router-dom'
import { getAuth, signInWithPopup, GoogleAuthProvider , createUserWithEmailAndPassword , sendEmailVerification} from "firebase/auth";
import Swal from 'sweetalert2'



const Registration = () => {


  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const navigate= useNavigate()
  

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };


  let [email, setEmail] = useState("")
  let [emailErr, setEmailErr] = useState("")
  let [pass, setPass] = useState("")
  let [passErr , setPassErr] = useState("")
  let [passLengthErr, setPassLengthErr] = useState("")
  let [emailPatternErr, setEmailPatternErr] = useState("")
  const [open, setOpen] = useState(true);
  var Meldungstext = "";
    Meldungstext = Meldungstext +"'" +email  +"'" +"<br><br>"
    Meldungstext = Meldungstext +"Email already used! please try again"  +"<br>"




  // Send a user a verification email
  let SendEmailVerification = () => {
    sendEmailVerification(auth.currentUser)
      .then(() => {
        // Email verification sent!
        // ...
      });
  }
  let handleSubmitbtn = () => {

    const emailRege = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[diu.edu]+(?:\.[bd]+)*$/;
    if(!email){
      setEmailErr("please enter your email")
    }
    else if (!emailRege.test(email)) {
      setEmailErr("")
      setEmailPatternErr("please must be used 'diu' email")
    }
    else if(!pass){
      setEmailErr("")
      setEmailPatternErr("")
      setPassErr("please enter your password")
    }
    // else if(!pass.length<8){
    //   setEmailErr("")
    //   setPassErr("")
    //   setEmailPatternErr("")
    //   setPassLengthErr("please should be 8 characters")
    // }
    else{
      setPassLengthErr("")
      setPassErr("")
      setEmailPatternErr("")
      
      createUserWithEmailAndPassword(auth, email, pass)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          
          console.log(user)
          Toast.fire({
            icon: 'success',
            title: 'account creation successfully'
          })
          navigate("/")

        }).then(()=>{
          SendEmailVerification()
        })
        .catch((error) => {
          const errorCode = error.code;
          if(errorCode == "auth/email-already-in-use"){
            Swal.fire({
              icon: 'error',
              title: 'Sorry!',
              html: Meldungstext,
             
            })
          }
          const errorMessage = error.message;
          console.log(errorMessage)
          // ..
        });

    }
  }



  // Google signin Notice
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  // Google Authentication -----------------------------------
  let handleGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        SendEmailVerification()
        // navigate('/loading')
  

      }).catch((error) => {
        const errorCode = error.code;
        
        const errorMessage = error.message;

        const email = error.customData.email;

        const credential = GoogleAuthProvider.credentialFromError(error);

      });
  }








  return (
    <div id='reg-part'>

      <Navbar></Navbar>

      <section className="reg-panel">



        <Box sx={{ marginTop: 10, width: 1000, height: 600 }} className="main-banner">

          <Container maxWidth="xl" style={{ width: '100%', height: '100%' }}>

            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              {/* left grid */}
              <Grid item xs={7} sx={{ width: 500, height: 400, marginTop: 1 }}>
                <div className="reg-banner">
                  <img src="./assets/images/reg.svg" alt="" />
                </div>
              </Grid>

              {/* right grid */}
              <Grid item xs={5} className="reg-right-Grid">

                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className="reg-right-Grid2">
                  <Grid item xs={2}>
                  </Grid>
                  <Grid item xs={3}>
                    <div className="reg-animation-logo">
                      <img src="./assets/images/cycle.gif" alt="" />
                    </div>
                  </Grid>
                  <Grid item xs={7}>

                  </Grid>

                </Grid>
                <div className="reg-title">
                  <h1>Sign'Up' to <small className='reg-title-diu'>DIU,Cycle Zone</small></h1>
                </div>
                <div className="reg-content">
                  {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> */}
                </div>

                <div className="error-alert">
                  {
                    emailErr ?
                      // <Alert
                      //   variant="filled" severity="error">
                      //   {emailErr}
                      // </Alert>
                          <Collapse in={open}>
                          <Alert variant="outlined" severity="error"
                            action={
                              <IconButton
                                aria-label="close"
                                color="inherit"
                                size="small"
                                onClick={() => {
                                  setOpen(false);
                                }}
                              >
                                <CloseIcon fontSize="inherit" />
                              </IconButton>
                            }
                            sx={{ mb: 2 }}
                          >
                            {emailErr}
                          </Alert>
                        </Collapse>
                      : 
                      passErr ?
                      <Collapse in={open}>
                      <Alert variant="outlined" severity="error"
                        action={
                          <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                              setOpen(false);
                            }}
                          >
                            <CloseIcon fontSize="inherit" />
                          </IconButton>
                        }
                        sx={{ mb: 2 }}
                      >
                        {passErr}
                      </Alert>
                    </Collapse>
                      :
                      emailPatternErr ?
                      <Collapse in={open}>
                      <Alert variant="outlined" severity="error"
                        action={
                          <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                              setOpen(false);
                            }}
                          >
                            <CloseIcon fontSize="inherit" />
                          </IconButton>
                        }
                        sx={{ mb: 2 }}
                      >
                        {emailPatternErr}
                      </Alert>
                    </Collapse>

                      :
                      passLengthErr ?
                      <Collapse in={open}>
                      <Alert variant="outlined" severity="error"
                        action={
                          <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                              setOpen(false);
                            }}
                          >
                            <CloseIcon fontSize="inherit" />
                          </IconButton>
                        }
                        sx={{ mb: 2 }}
                      >
                        {passLengthErr}
                      </Alert>
                    </Collapse>
                      :

                      
                      ""
                  }
                </div>


                <div className="reg-form">

                  <TextField id="standard-basic" label="Email" variant="standard" className='text-id'
                    onChange={(e) => { setEmail(e.target.value) }} />

                  <FormControl sx={{ width: '25ch' }} variant="standard" className='text-id'>
                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                    <Input
                      id="standard-adornment-password"
                      type={showPassword ? 'text' : 'password'}
                      onChange={(e) => { setPass(e.target.value) }}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>


                  <div className="reg-remember">
                    <div className="rem">
                      <input className='checkBox' type="checkbox" /> <label htmlFor="">Remember me</label>
                    </div>
                    <div className="forget">
                      <a href=""><p>Forgot Password</p></a>
                    </div>
                  </div>


                  <div className="reg-signup" onClick={handleSubmitbtn}>
                    <button>Sign Up</button>
                  </div>

                  <div className="already-account">
                    <p>Already have an account? <small><Link to={"/"}>Login here</Link></small></p>
                  </div>

                  <div className="or-part">

                    <p>-or-</p>

                  </div>

                  <div className="social-media">
                    <nav>
                      <ul>
                        <li onClick={handleGoogle} className='google'><FcGoogle></FcGoogle></li>
                        <li className='google'><FcPhone></FcPhone></li>
                      </ul>
                    </nav>
                  </div>

                </div>

              </Grid>

            </Grid>

          </Container>

        </Box>




      </section>



      <section className='copyRights'>
        <Copyright></Copyright>
      </section>






    </div>
  )
}

export default Registration