// import React ,{useState, useEffect} from 'react';
// import Button from '@material-ui/core/Button';
// import './registraion.css'
// import PersonIcon from '@mui/icons-material/Person';
// import EmailIcon from '@mui/icons-material/Email';
// import LockIcon from '@mui/icons-material/Lock';
// import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
// import blue from "@material-ui/core/colors/blue";
// import { useNavigate, Link } from "react-router-dom";
// function Registraion() {
//     // const [users, setUsers] = useState([])
//     // const [name, setName] = useState("")
//     // const [email, setMail] = useState("");
//     // const [password, setPassword] = useState("")
    
//     const [users, setUsers] = useState([])
//     const [name, setName] = useState("")
//     const [email, setMail] = useState("");
//     const [password, setPassword] = useState("")
//     const [number, setNumber] = useState("")
//     const [submit,setSubmit]= useState(false);
//     const[formErrors, setFormErrors]= useState({
//         username:"",
//         email:"",
//         number:"" ,
//         password:""

//     })
//     function ha(e) {
//         e.preventDefault()
//         localStorage.setItem("mail", email)
//         localStorage.setItem("password", password)
//         let user={name,email,password}
//         setUsers([...users,user])
//         localStorage.setItem("u",JSON.stringify(users))
//         var c=localStorage.getItem("u")
//         console.log(c)
        
//         setFormErrors(validate(users))
//         setSubmit(true);
        
//     }

// function validate(values){

// if(!values.name){
// formErrors.username= "username required"
// }
// if(!values.email){
//     formErrors.email= "email required"
//     }
    
//         console.log('ergvergreg',password.length)
//         if(!values.password){
//             formErrors.password= "password required"
//             }
//             else if(values.password.length <4){

//                 formErrors.password= "password can't be less than 4 characters"
//                 }
        
//                     if(password.length>8){
//                         formErrors.password = "Password cant't be more than  8 characters"
//                     }
                    
//       if(!values.phone){
//         formErrors.number= "number required"
//         }
//        console.log("fe",formErrors)
//        return formErrors
        
// }
    
// useEffect(()=>{
// console.log(Object.values(formErrors));
// },[formErrors])
//     return (
//         <div className='surface'> 
//         <div className="reg-box ">
//        <h1>Register</h1>
//         <form onSubmit={ha}
//             style={{ padding: "10px" }}>
//             <div className="mail">
//                <span> <EmailIcon style={{ color: "blue" }}/>
//                 <input
//                     type="text"
//                     placeholder="Enter Mail"
//                     value={email}

//                     onChange={(e) => setMail(e.target.value)}
//                 ></input></span>
//                 <p className='error' >{email=== "" && formErrors.email}</p>
//             </div>
//             <div className="name">
//                 <span><PersonIcon style={{ color: "blue" }}/>
//                 <input type="text"
//                     placeholder="Enter your name"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                 ></input></span>
//                 <p className='error'>{ formErrors.username}</p>
//             </div>
//             <div className="number">
//                 <span><LocalPhoneIcon style={{ color: "blue" }}/>
//                 <input type="phone" placeholder="Enter phone number" 
//                 value={number}
//                 onChange={(e) => setNumber(e.target.value)}
//                 ></input></span>
//                 <p className='error'>{number === "" && formErrors.number}</p>
//             </div>
//             <div className="password">
//                <span><LockIcon style={{ color: "blue" }}/>
//                 <input type="password"
//                     placeholder="Enter Password"
//                     value={password}

//                     onChange={(e) => setPassword(e.target.value)}
//                 ></input></span>
//                 <p className='error'>{ formErrors.password}</p>
//             </div>
//             {/* <div className="password">
//                <span><LockIcon style={{ color: "blue" }}/>
//                 <input type="password" placeholder="Confirm Password" ></input></span>
//             </div> */}

//             <button type="submit" className=" sign btn btn-primary" >Register</button>
//             <div className="register">
//                         <p>Already have an account   <Link to="/">Login </Link></p>
                        
//                     </div>
            
//         </form>
//     </div>
         
//         </div>
//     );
// }

// export default Registraion;