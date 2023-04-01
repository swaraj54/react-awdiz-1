import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar';

const Allproducts = () => {
    const router = useNavigate();
    const [allData, setAllData] = useState()
    console.log(allData, 'allData')
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setAllData(json))
    }, [])
    return (
        <div>
            <Navbar/>
            <div style={{ display: 'flex', flexWrap: "wrap", justifyContent: 'space-around' }}>
                {allData && allData.map((e, i) => (
                    <div key={i} style={{ width: '20%', border: "1px solid black" }} onClick={() => router(`/allproducts/${e.id}`)}>
                        <img style={{ width: '100%', height: "50%" }} src={e.image} />
                        <h1>{e.title}</h1>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Allproducts