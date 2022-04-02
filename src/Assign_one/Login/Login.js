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

    const [submit,setSubmit]= useState(false);
const[formErrors, setFormErrors]= useState({})
function ha(e) {
    e.preventDefault()
    localStorage.setItem("mail", email)
    localStorage.setItem("password", password)
    let user={email,password}
    setUsers([...users,user])
    localStorage.setItem("u",JSON.stringify(users))
    var c=localStorage.getItem("u")
    console.log(c)
    console.log("a")
    setFormErrors(validate(users))
        setSubmit(true);
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
                if(!values.phone){
                    errors.number= "number required"
                }
                return errors;
        }
        useEffect(()=>{if(Object.keys(formErrors).length == 0 && submit){

        }},[formErrors])
    //const myStyle= {position: "absolute" , top: "40%" ,left: "30%", height: "30rem" ,width: "29rem", backgroundColor: "#f5d020",right: "50%", justifyContent: "center",}
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
