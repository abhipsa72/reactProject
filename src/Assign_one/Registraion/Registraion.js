


import React ,{useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import './registraion.css'
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import blue from "@material-ui/core/colors/blue";
import { useNavigate, Link } from "react-router-dom";
import {TextField } from '@mui/material';
function Registraion() {
    // const [users, setUsers] = useState([])
    // const [name, setName] = useState("")
    // const [email, setMail] = useState("");
    // const [password, setPassword] = useState("")
    
    const [values, setValues] = useState([{
name: "",
email: "",
number:"",
password: ""
    }])
    
    const [submit,setSubmit]= useState(false);
    const[errors, setErrors]= useState({ })

    function handleFormSubmit(event) {
       
        event.preventDefault();
        localStorage.setItem("mail", values.email)
       localStorage.setItem("password",values.password)
        localStorage.setItem("u",JSON.stringify(values))
        var c=localStorage.getItem("u")
        console.log("heija",c)
        setErrors(validate(values))
    }
    function handleChange(event) {
setValues({
    ...values,[event.target.name]: event.target.value
})
    }
   
function validate(values){
let errors= {};
if(!values.name){
errors.username= "username required"
}
if(!values.email){
    errors.email= "email required"
    }
    
        //console.log('ergvergreg',password.length)
        if(!values.number){
            errors.number= "number required"
            }
        if(!values.password){
            errors.password= "password required"
            }
            else if(values.password.length <4){

                errors.password= "password can't be less than 4 characters"
                }
        
                    else if(values.password.length>8){
                        errors.password = "Password cant't be more than  8 characters"
                    }
                    
     
       console.log("fe",errors)
       return errors
        
}
    
useEffect(()=>{
console.log(Object.values(errors));

},[setErrors])
    return (
        <div className='surface'> 
        <div className="reg-box ">
       <h1>Register</h1>
        <form onSubmit={handleFormSubmit}
            style={{ padding: "10px" }}>
                
            <div className="mail">
                <TextField variant='standard' label='email'
               helperText ={errors.email}
                />
               <span> <EmailIcon style={{ color: "blue" }}/>
                <input
                    type="text"
                    placeholder="Enter Mail"
                    value={values.email}
                  name= "email"
                    onChange={handleChange}
                ></input></span>
               {errors.email && <p className='error'>{errors.email}</p>}
            </div>
            <div className="name">
                <span><PersonIcon style={{ color: "blue" }}/>
                <input type="text"
                    placeholder="Enter your name"
                    value={values.name}
name= "name"
                    onChange={handleChange}
                ></input></span>
                 {errors.username && <p className='error'>{errors.username}</p>}
            </div>
            <div className="number">
                <span><LocalPhoneIcon style={{ color: "blue" }}/>
                <input type="phone" placeholder="Enter phone number" 
                value={values.number}
                name= "number"
                onChange={handleChange}
                ></input></span>
                 {errors.number && <p className='error'>{errors.number}</p>}
            </div>
            <div className="password">
               <span><LockIcon style={{ color: "blue" }}/>
                <input type="password"
                    placeholder="Enter Password"
                    value={values.password}
                    name= "password"
                    onChange={handleChange}
                ></input></span>
                 {errors.password && <p className='error'>{errors.password}</p>}
            </div>
            {/* <div className="password">
               <span><LockIcon style={{ color: "blue" }}/>
                <input type="password" placeholder="Confirm Password" ></input></span>
            </div> */}

            <button type="submit" className=" sign btn btn-primary" >Register</button>
            <div className="register">
                        <p>Already have an account   <Link to="/">Login </Link></p>
                        
                    </div>
            
        </form>
    </div>
         
        </div>
    );
}

export default Registraion;