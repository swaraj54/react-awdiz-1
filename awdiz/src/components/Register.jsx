import { useState } from "react";

function Register() {
    const [userData, setUserData] = useState({ name: "", email: "", password: "" });
    // console.log(userData,"userData check here");

    function handleSubmit(event) {
        event.preventDefault();
        // console.log(userData,"after submit");
        var usersFromDB = JSON.parse(localStorage.getItem("userForReact")) || [];
        usersFromDB.push(userData);
        localStorage.setItem("userForReact", JSON.stringify(usersFromDB));
        setUserData({ name: "", email: "", password: "" })
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
            <form onSubmit={(event) => handleSubmit(event)}>
                <label>Name</label><br />
                <input onChange={updatingData} name='name' value={userData.name || "Avinash" } type="text" placeholder="Type your Name" /><br />
                <label>Email</label><br />
                <input onChange={updatingData} name='email' value={userData.email || "Abc@gmail.com"} type="email" placeholder="Type your Email" /><br />
                <label>Password</label><br />
                <input onChange={updatingData} name='password' value={userData.password} type="password" placeholder="Type your Password" /><br />
                <input type="submit" value="Register" />
            </form>
        </div>
    )
}
export default Register;