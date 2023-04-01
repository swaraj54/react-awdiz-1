import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleProductPage = () => {
    const [singleProduct, setSingleProduct] = useState();
    console.log(singleProduct, 'singleProduct')
    const data = useParams();
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => json.filter(obj => obj.id == data.id))
            .then(data => setSingleProduct(data[0]))
    }, [])
    console.log(data.id)
    return (
        <div>SingleProductPage
            {singleProduct && <div>
                <img src={singleProduct.image} />
                <h1>{singleProduct.title}</h1>
                <button>Add to cart</button>
            </div>}
        </div>
    )
}
export default SingleProductPage