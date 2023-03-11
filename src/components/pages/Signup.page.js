import React, { useState } from 'react';
import Logo from "../../Assets/login_signup_form/logo_elel.svg";
import SignupImage from "../../Assets/login_signup_form/signup-young-woman.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Visibility , VisibilityOff } from '@mui/icons-material';
import EmailIcon from '@mui/icons-material/Email';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Person from  '@mui/icons-material/Person'; 
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import { makeStyles } from '@mui/material/styles';
import { TextField, InputAdornment, Input, InputLabel, Select, IconButton, MenuItem, } from '@mui/material';


function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}



function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isdCode, setISDCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState('');

  // const classes = useStyles();

  const [selectedOption, setSelectedOption] = useState('elel_user');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    alert(event.target.value)
  };

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
        <img src = {Logo} alt = "logo" class = "signup_logo"/>
        <img src = {SignupImage} alt = "young-woman-pic" class = "signup_img" /> 
        <h1 id = "signup_page_text_createaccount"><span>CREATE YOUR ACCOUNT</span></h1>
        <h1 id = "signup_page_text_accounttype"><span>Please choose your account type</span></h1>
        
        <div>
          <FormControl component="fieldset" className="signup_usetype_radio_group">
            <FormLabel component="legend"></FormLabel>
            <RadioGroup aria-label="option" name="option" value={selectedOption} onChange={handleOptionChange}>
              <FormControlLabel className="signup_elel_user_radio label" value="elel_user" control={<Radio />} label="ELEL USER" />
              <FormControlLabel className="signup_event_owner_radio label" value="event_owner" control={<Radio />} label="I'M AN EVENT OWNER" />
            </RadioGroup>
          </FormControl>
        </div>

        <label><input  type="checkbox" class = "signup_checkbox" name = "newsletter" value="yes" /></label>
        <i class = "signup_footer_left_checkbox">I would like to receive news and offer notification from Elel</i>
        <span class = "signup_footer_left_terms">By creating an account you agree to our &nbsp;</span>
        <a class = "signup_terms_link" href = '' target="_blank" rel="noopener noreferrer">Terms & Privacy Policy</a>
        <span class = "login_footer_right_text">Do you have an account?</span>
        <div class = "login_footer_right_line"></div>
        <a class = "login_footer_right_signup" href = './components/pages/Login.page.js' target="_blank" rel="noopener noreferrer">LOGIN</a>
        <span class = "signup_text_SIGNUP">SIGN UP</span>
        <div class = "signup_line_SIGNUP"></div>
        <div class = "signup_text_OR">OR</div>
        <div class = "signup_line_OR"></div>

        <div class = "signup_Fname">
          <TextField
            id="first-name"
            placeholder='   First name'
            variant="standard"
            sx={{ width: '179px', height: '52px' }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                  <Person sx={{ color: '#5AD5F9' }} />
                </InputAdornment>
              ),
              disableUnderline: true
            }}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div class = "signup_Lname">
          <TextField
            id="last-name"
            placeholder='   Last name'
            variant="standard"
            sx={{ width: '179px', height: '52px' }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                  <EmailIcon sx={{ color: '#5AD5F9' }} />
                </InputAdornment>
              ),
              disableUnderline: true
            }}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <TextField
          id="isd-code"
          placeholder="ISD Code"
          variant="standard"
          class = "signup_ISD_code"
          sx={{ width: '179px', height: '52px', mt: '20px', mr: '20px' }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                <Person sx={{ color: '#5AD5F9' }} />
              </InputAdornment>
            ),
            disableUnderline: true
          }}
          value={isdCode}
          onChange={(e) => setISDCode(e.target.value)}
        />

        <TextField
          id="phone-number"
          placeholder ="Phone Number"
          variant="standard"
          class = "signup_phone_no"
          // sx={{ width: '179px', height: '52px' }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                <Person sx={{ color: '#5AD5F9' }} />
              </InputAdornment>
            ),
            disableUnderline: true
          }}
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />

        <FormControl class = "signup_gender">    
          <Select
            labelId="gender-label"
            id="gender"
            sx={{ width: '202px', height: '52px' , borderRadius:'12px', zIndex:'100', fontFamily:'poppins',
              textDecorationColor:'#939393', fontSize:'15px', border:'none'
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" sx={{ display: 'flex', alignItems: 'center', height: '100%'}}>
                  <AccessibilityNewIcon sx={{ color: '#5AD5F9' }} />
                </InputAdornment>
              ),
              disableUnderline: true
            }}
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </Select>
        </FormControl>

        <div class="signup_emailbox">
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
        <div class="signup_passwordbox">
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

        <btn class= "btn btn-info btn_gmail_signup">Sign up with Gmail</btn>
        <btn class= "btn btn-info btn_Apple_Id_signup">Sign up with Apple Id</btn>
        <btn class = "btn btn-info btn_signup" onClick={handleLogin}>SIGN UP</btn>
    </div>
  );
}
  export default Signup;