import { Link,useNavigate } from 'react-router-dom';
 import React,{ useState } from "react";
 import { useAuth } from "./context/useauth";
 import { Navigate } from 'react-router-dom';
 import {usertypes} from './dropdown';
 import Dropdown from './dropdown';
 import './registration.css';
import { Register } from './api/registration';

function RegistrationPage(){
    
    const [formData, setFormData]=useState({
        firstname:'',lastname:'',usertype:usertypes.guest,phone:"",email:'',password:'',confirmation:''})
    const [message, setMessage] = useState<string>("")
    const navigate = useNavigate();
    const { isLoggedin } = useAuth();
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });}
    
    if (isLoggedin){return  <Navigate to="/" />;}
    const handleLogin = async () => {
        await Register(formData, setMessage,setFormData,  navigate);
      };
    return(<>
    
    
        <div className="registration-page">
          <div className="login-card-registration">
            <h1 className="login-title">Registration</h1>
            <p className="login-subtitle">Create an account</p>
            
            <div className="login-form">
            
             <div className='form-group'>
                
                <label >firstname</label>
                <input name="firstname" value={formData.firstname}onChange={handleChange}></input><br/>
                <label >lastname</label>
                <input name="lastname" value={formData.lastname}onChange={handleChange}></input><br/>
                <Dropdown
                value={formData.usertype}
                onChange={(newType) => setFormData({ ...formData, usertype: newType })}/><br/>
                <label >phone number<br/></label>
                <p  className="signup-text"> start with country code eg +254, then use digits only, 7-15 characters</p><br/>
                <input name="phone" type="tel" value={formData.phone}onChange={handleChange}></input><br/>
                <label >email</label>
                <input type='email'name="email" value={formData.email}onChange={handleChange}></input><br/>
                <p className="signup-text">password must be at least 8 characters long<br/></p>
                <p className="signup-text">Password should contain a mixture of uppercase, lowercase, numbers and symbols</p><br/>
                <label>password</label>
                <input type="password" name='password'value={formData.password}onChange={handleChange}></input><br/>
                <label>confirm password</label>
                <input type="password" name='confirmation'value={formData.confirmation}onChange={handleChange}></input><br/>
                <p className="error">{message}</p>
                <button className="login-button" onClick={handleLogin}>register</button><br/>
             </div>
              
              
              <div className="divider"></div>
              
              <p className="signup-text">
              <Link to={`/login`} ><button>log in</button></Link>
              </p>
              <Link to={`/`} className='signup-text'>proceed to homepage without registration</Link>
            </div>
          </div>
        </div>
    </>)
}


export default RegistrationPage 