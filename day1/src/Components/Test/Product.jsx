import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Product = () => {
    const[product, setProduct] = useState([]);
    useEffect(() =>{
        GetProducts();
    },[])

    async function GetProducts(){
        try {
            const response = await axios.get("https://fakestoreapi.com/products");
        setProduct(response.data);
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div>
        <h1>Product</h1>
        {product.map((allProduct) => (
            <div>   
                <img src= {allProduct.image} />
                <p>title : {allProduct.title}</p>
                <p>price : {allProduct.price}</p>
            </div>
        ))}
        
    </div>
  )
}

export default Product