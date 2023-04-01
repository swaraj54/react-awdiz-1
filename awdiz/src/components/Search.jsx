import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const Search = () => {
    const [singleProduct, setSingleProduct] = useState();
    console.log(singleProduct, "singleProduct")
    const data = useParams();
    console.log(data, "here")
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => json.filter(obj => obj.title == data.name))
            .then(data => setSingleProduct(data))
    }, [])
    return (
        <div style={{ display: 'flex', flexWrap: "wrap", justifyContent: 'space-around' }}>
        {singleProduct && singleProduct.map((e, i) => (
                <div key={i} style={{ width: '20%', border: "1px solid black" }}>
                    <p >{e.title}</p>
                    <img  style={{ width: '100%', height: "50%" }} src={e.image} />
                </div>
            ))}
    </div>
    )
}

export default Search