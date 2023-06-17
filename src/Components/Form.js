
import React,{useState} from "react";



const  Form =() =>{
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handalClick=()=>{


        if (!name || !email || !password || !confirmPassword) {
            setError('All fields are mandatory');
            return;
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        else {
            setSuccess('Successful Signed Up!');

        }
    }

  return (
    <div>
        <h1 className="heading">SignUp</h1>
        <div className="form">
                <label >Full Name</label><br />
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} /><br /><br />

                <label >Email</label><br />
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} /><br /><br />

                <label >Password</label><br />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br /><br />

                <label > Confirm Password</label><br />
                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} /><br />
            </div>
            {
                error && 
                <div className="error">{error}</div>
            }
            {
                success && 
                <div className="success">{success}</div>
            }
            <div className="btn">
                <button onClick={handalClick}>SignUp</button>
            </div>
    </div>
  )
}

export default Form;