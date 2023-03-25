import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function App() {
  const [currentUser, setCurrentUser] = useState(false);
  console.log(currentUser)
  const router = useNavigate();
  useEffect(() => {
    var currentUserFromLS = JSON.parse(localStorage.getItem("current-user"));
    console.log(currentUserFromLS, "hii")
    if (currentUserFromLS) {
      setCurrentUser(true);
    }
  }, [])
  function logout() {
    localStorage.removeItem("current-user");
    toast.success("Logout successfull !");
    setCurrentUser(false);
  }
  return (
    <>
      <div>
        <button onClick={()=> toast.error("WOkring!")}>Toawst</button>
        {/* {currentUser && <button>Logout</button>}
      {!currentUser && <button >Login</button>} */}
        {currentUser ? <button onClick={logout} >Logout</button> : <button onClick={() => router('/login')}>Login</button>}
      </div>
    </>
  )
}
export default App