import { useEffect, useState } from "react";

function Home(){
  const [myName, setMyName] = useState("om");
  const [myEmail, setMyEmail] = useState("");
  console.log(myName,"myName")


  return (
    <div>
      <h1>Home page {myName}</h1>
      <button onClick={()=>setMyName("rehmat")}>Click to chnge name</button>
    </div>
  )
}

export default Home; 