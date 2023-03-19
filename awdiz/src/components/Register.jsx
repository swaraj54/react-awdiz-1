import { useState } from "react";
import  {  useNavigate } from 'react-router-dom'

function Register() {
    const [userData, setUserData] = useState({ name: "", email: "", password: "" });
    const router =  useNavigate();
    // console.log(userData,"userData check here");
    function sendUser() {
        router('/login')
    }

    function handleSubmit(event) {
        event.preventDefault();
        // console.log(userData,"after submit");
        var usersFromDB = JSON.parse(localStorage.getItem("userForReact")) || [];
        usersFromDB.push(userData);
        localStorage.setItem("userForReact", JSON.stringify(usersFromDB));
        setUserData({ name: "", email: "", password: "" })
        router('/login')
        alert("Registration Done...")
    }
    function updatingData(e) {
        var name = e.target.name;
        var value = e.target.value;
        // console.log(e.target.name,e.target.value);
        setUserData({...userData, [name]:value} )
    }
    return (
        <div>
            <button onClick={ () => sendUser()}>TO lgoin</button>
            <form onSubmit={(event) => handleSubmit(event)}>
                <label>Name</label><br />
                <input onChange={updatingData} name='name' value={userData.name || "" } type="text" placeholder="Type your Name" /><br />
                <label>Email</label><br />
                <input onChange={updatingData} name='email' value={userData.email || ""} type="email" placeholder="Type your Email" /><br />
                <label>Password</label><br />
                <input onChange={updatingData} name='password' value={userData.password || ""} type="password" placeholder="Type your Password" /><br />
                <input type="submit" value="Register" />
            </form>
        </div>

    )
}
export default Register;