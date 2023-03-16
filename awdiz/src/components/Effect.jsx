import { useEffect, useState } from "react";
import '../App.css';

const Effect = () => {
    const [number, setNumber] = useState(0);
    const [number2, setNumber2] = useState(0)
    const [products, setProducts] = useState();
    console.log(products, 'products heree')
    // useEffect(() => { alert("Working !") })
    // will execute the code on every render 

    useEffect(() => {
        // fetch('https://food-names-api.herokuapp.com/api/')
        //     .then((response) => response.json())
        //     .then((data) => setProducts(data))
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json))
    }, [])
    // Will execute the code ONLY Very first time

    // useEffect(() => { alert("Will execute the code when state changes") }, [number])
    // Will execute the code very first time & when the specific state will changes

    // useEffect(()=> {alert("For multiple states")}, [number,number2])
    // will execute the code very first time & for multiple states that we passed

    return (
        <>
            {/* <h1>Number -  {number}</h1>
            <h1> Number 1 -{number2}</h1>
            <button onClick={() => setNumber(number + 1)}>Click</button>
            <button onClick={() => setNumber2(number2 + 1)}>Click for 1</button> */}
            <div id="products">
                {products && products.map((e) => (
                    <div>
                        <img src={e.image} />
                        <h1>{e.title}</h1>
                        <p>{e.price}</p>
                        <p>200 for two</p>
                    </div>))
                }
            </div>


        </>
    )
}
export default Effect;