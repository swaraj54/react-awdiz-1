// import { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
// // import UserContext from "../index";

// function Navbar() {
//     const [searchData, setSearchData] = useState("");
//     const router = useNavigate();
//     console.log(searchData, "searchData")
//     // const userName = useContext(UserContext)
//     function handleChnage(e) {
//         setSearchData(e.target.value)
//     }
//     function handleSubmit() {
//         if (searchData) {
//             router(`/search/${searchData}`);
//         }
//     }
//     return (
//         <div>
//             Navbar - {userName}
//             <input type='text' onChange={(e) => handleChnage(e)} />
//             <button onClick={handleSubmit}>Search</button>
//         </div>
//     )
// }
// export default Navbar;