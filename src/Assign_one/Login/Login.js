import React, {useState, useEffect} from 'react';
import '../Registraion/registraion.css'
import { useNavigate, Link } from "react-router-dom";
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
function Login() {
    let navig = useNavigate();
    const [users, setUsers] = useState([])
    
    const [email, setMail] = useState("");
    const [password, setPassword] = useState("")

    
const[formErrors, setFormErrors]= useState({})
function ha(e) {
    e.preventDefault()
    
    let user={email,password}
    setUsers([...users,user])
    
    setFormErrors(validate(users))
       
}
    function validate(values){
        const errors={};
        if(!values.username){
        errors.username= "username required"
        }
        if(!values.email){
            errors.email= "email required"
            }
            if(!values.password){
                errors.password= "password required"
                }
                if(values.password <4){
                    errors.password = "Password must be atleast of 4 characters"
                            }
                             if(values.password >8){
                                errors.password = "Password cant't be more than  8 characters"
                            }
               
                if(!values.phone){
                    errors.number= "number required"
                }
                return errors;
        }
        
    return (
        <div className='surface'> 
        <div className="reg-box ">
       <h1>Login</h1>
        <form onSubmit={ha}
            style={{ padding: "10px" }}>
            <div className="mail">
               <span> <EmailIcon style={{ color: "blue" }}/>
                <input
                    type="text"
                    placeholder="Enter Mail"
                    value={email}
                    onChange={(e) => setMail(e.target.value)}
                ></input></span>
                <p className='error'>{email === "" && formErrors.username}</p>
            </div>
            
            <div className="password">
               <span><LockIcon style={{ color: "blue" }}/>
                <input type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                ></input></span>
                 <p className='error'>{password === "" && formErrors.password}</p>
            </div>
                    <button type="submit" className=" sign btn btn-primary" >Sign in</button>


                    <div className="forgot password">
                        forgot password?
                    </div>
                    <div className="register">
                        <p>Don't have account?   <Link to="/register">Resgister </Link></p>
                        
                    </div>
                </form>
            </div>
        </div>



    )
}

export default Login;
