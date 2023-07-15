import React, { useState } from 'react';

let fb= require('./facebook 1.png');
let googleimg=require('./search 1.png');

function Inputform() {
    const [user , setUser] = useState({ name: "", email: "", password: "", confirmPassword: "" });
    const [greenmsg, setGreenmsg] = useState("");
     
    const [redmsg, setRedmsg] = useState("");
    

    function validator(event) {
        event.preventDefault();
        if (user.name.length < 1) {
            setRedmsg("Error: Name is a mandatory property...");
            setGreenmsg("")
            return;
        } else if (user.email.length < 4 ) {
            setRedmsg("Error: Email is an mandatory property...")
            setGreenmsg("");
        }else if(user.password.length<5){
            setRedmsg("Password should contain at least 5 elements...")
            setGreenmsg("");
        } 
        else if (user.password !== user.confirmPassword ) {
            setRedmsg("Error: Please make sure Password and confirm password should match...")

            setGreenmsg("");
        }else{
            setGreenmsg("Successfully Created!!")
            setRedmsg("");
        }
    }
    return (

        <div className="inputform">
    
            <h1>Create Account</h1>
            <div className='FB-google' >
                <span><img src={googleimg} alt="img"/> Sign up with Google</span>
                <span><img src={fb} alt="img"/>Sign up with Facebook</span>
            </div>
            <div className='or'>-OR-</div>


            <form onSubmit={validator}>
                <input
                    type="text"
                    name="name"
                    placeholder='Full name'
                    onChange={(e) => setUser({ ...user, name: e.target.value })}

                />
                <input
                    type="email"
                    name="email"
                    placeholder='Email Address'
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
                <input
                    type="password"
                    name="password"
                    placeholder='Password'
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                />
                <input
                    type="password"
                    name="confirm-password"
                    placeholder='Confirm Password'
                    onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
                />
                <button type="submit" >Create Account</button>
                <h2 style={{color:'#7CD2D7'}}>{greenmsg}</h2>
                <h2 style={{color:'red'}}>{redmsg}</h2></form>
           
            {console.log(user)}
        </div>

    );
}
export default Inputform;