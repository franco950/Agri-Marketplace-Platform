import { Link, useSearchParams } from "react-router-dom";
import { useState,useEffect } from 'react';
import { searchParams } from "./homepage";
import { useQuery } from '@tanstack/react-query';
import './products.css'

async function getProductData(params:searchParams){
    try{
        const filteredParams = Object.fromEntries(
            Object.entries(params).filter(([_, value]) => value !== '')
        );
        const allParamsEmpty = Object.keys(filteredParams).length === 0;
        let query;
    if (allParamsEmpty){
        query=`http://localhost:5000/product`
    }
    else{
        const queryString = '?'+new URLSearchParams(filteredParams as Record<string, string>).toString();
        query=`http://localhost:5000/product${queryString}`
    }
    const response=await fetch(query,{
        method: "GET",
        headers: {
          "Content-Type": "application/json", 
        },
        credentials: "include",
    
    })
    const {myproducts,result} = await response.json(); 
    if (!response.ok) { 
        const error = await response.json();
        throw new Error(error.message || "Request failed")};
    if (!allParamsEmpty && result=='all'){
        throw new Error('no products found')}
    return myproducts}
    
    
    catch(error:any) {
        console.error("Error retrieving products:", error);
        throw new Error(error)} 
  }
  function capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

function ProductPage(){
    const [searchParams] = useSearchParams()||'';
    const type = searchParams.get('type')|| '';
    const uppername = searchParams.get('name')|| '';
    const name=capitalizeFirstLetter(uppername)
    const location = searchParams.get('location')|| '';
    const queryParams = { name, type, location };
    
   
    const {
        data: products,
        isLoading,
        error,
      } = useQuery({
        queryKey: ['products', queryParams], // Key includes params so cache is managed correctly
        queryFn: () => getProductData(queryParams),
        staleTime: 1000 * 60 * 5, // Optional: 5 minutes
      });
    
      if (isLoading) return <p>Loading...</p>;
      if (error instanceof Error) return <p>{error.message}</p>;
    


      
    

    return(<>
    <Link to={'/product'}>browse all</Link>
    <>
      <h1>Products</h1>
      {products.map((product:any) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </>
   
   </>)
}
export default ProductPage