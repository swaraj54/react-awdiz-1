import React, { useState } from 'react';

const Addproducts = () => {
    const [product, setProduct] = useState({ pName: "", pImage: "", pNumber: "" });

    function handleSubmit(e) {
        e.preventDefault();
        // console.log(product,"product");
        if (product.pName && product.pImage && product.pNumber) {
            var dataFromLS = JSON.parse(localStorage.getItem("SwiggyProducts")) || [];
            dataFromLS.push(product);
            localStorage.setItem("SwiggyProducts", JSON.stringify(dataFromLS));
            setProduct({ pName: "", pImage: "", pNumber: "" })
            alert("Product added.");
        } else {
            alert("Please add all fields.");
        }
    }
    function handleInputs(e) {
        const name = e.target.name;
        const value = e.target.value;
        setProduct({ ...product, [name]: value })
    }
    return (
        <div style={{ width: '30%', margin: 'auto', marginTop: "80px", textAlign:"left"  }}>
            <form onSubmit={(e) => handleSubmit(e)} >
                <fieldset>
                    <legend>Add Products here..</legend>
                    <label>Type Product Name</label><br />
                    <input name='pName' value={product.pName} onChange={handleInputs} type='text' /><br />
                    <label>Type Product Image url</label><br />
                    <input name='pImage' value={product.pImage} onChange={handleInputs} type='text' /><br />
                    <label>Type Product Price</label><br />
                    <input name='pNumber' value={product.pNumber} onChange={handleInputs} type='number' /><br />
                    <input type='submit' value="Add Product" />
                </fieldset>
            </form>
        </div>
    )
}

export default Addproducts;