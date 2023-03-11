import React, { useState } from 'react';
import Logo from "../../Assets/login_signup_form/logo_elel.svg";
import LoginImage from '../../Assets/login_signup_form/login_man_image.png'
import { Input, InputAdornment, IconButton } from '@mui/material';
import { Visibility , VisibilityOff } from '@mui/icons-material';
import { TextField } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';

function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const handleChange = (event) => {
    setEmail(event.target.value);
  };
  
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }
    alert('Its Working!!')
  };

  const handleBlur = (e) => {
    const { value } = e.target;
    setEmail(value);
    if (!validateEmail(value)) {
      setEmailError(true);
      alert('Please enter a valid email address.')
    } else {
      setEmailError(false);
    }
  };

  return (
    <div class= "wrapper">
        <img src = {Logo} alt = "logo" class = "login_logo"/>
        <img src = {LoginImage} alt = "african-man-pic" class = "login_img" /> 
        <i class = "no_of_events_ellipse"></i>
        <h1 id = "login_page_text_welcome"><span>WELCOME AGAIN!</span></h1>
        <i class = "login_text1">New events await you inside.</i>
        <label ><input  type="checkbox" class = "login_checkbox" name = "newsletter" value="yes" /></label>
        <label><input type = "checkbox" class = "remember_me" name = "remember" value ="yes" /></label>
        <i class = "remember_me_text">Remember Me</i>
        <i class = "login_footer_left_checkbox">I would like to receive news and offer notification from Elel</i>
        <span class = "login_footer_right_text">Dont you have an account?</span>
        <div class = "login_footer_right_line"></div>
        <a class = "login_footer_right_signup" href = 'Signup.page.js' >SIGN UP</a>
        <span class = "login_text_LOGIN">LOGIN</span>
        <div class = "login_line_LOGIN"></div>
        <div class = "text_OR">OR</div>

        <div class="emailbox">
          <TextField
            id="email-input"
            placeholder='   Enter your email id'
            type="email"
            variant="standard"
            sx={{ width: '379px', height: '52px' }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                  <EmailIcon sx={{ color: '#5AD5F9' }} />
                </InputAdornment>
              ),
              disableUnderline: true
            }}
            onChange={handleChange}
            value={email}
            error={!!emailError} 
            helperText={emailError} 
            onBlur={handleBlur} 
            validate={validateEmail} 
          />
        </div>
        <div class="passwordbox">
          <Input
            type={showPassword ? 'text' : 'password'}
            value={password}
            placeholder=' Enter your password'
            onChange={handlePasswordChange}
            startAdornment={
              <InputAdornment position="start">
                <IconButton onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            } disableUnderline 
            sx={{
              width: '379px', height: '52px',
              '& .MuiInputBase-input': {
                color: '#000000' , border: 'none', outline: 'none', 
              },
              '& .MuiInputAdornment-root .MuiIconButton-root': {
                color: '#5AD5F9', 
              },
            }}
          />
        </div>

        <btn class= "btn btn-info btn_gmail_login">Login with Gmail</btn>
        <btn class= "btn btn-info btn_Apple_Id">Login with Apple Id</btn>
        <btn class = "btn btn-info btn_login" onClick={handleLogin}>Login</btn>
        <a class="forgot_password_link" href = '' target="_blank" rel="noopener noreferrer"> Forgot Your Password? </a>
    </div>
  );
}
  export default Login;