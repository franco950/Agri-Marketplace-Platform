import { Productform } from "../data";
const url=import.meta.env.VITE_SERVER_URL
export async function postProduct(product:Productform[]):Promise<number>{
    try{
        
    const query=`${url}/product/farmer`

    const response=await fetch(query,{
        method: "POST",
        headers: {
          "Content-Type": "application/json", 
        },
        credentials: "include",
        body:JSON.stringify(product)
       
    })
    const result = await response.json(); 
    
    if (!response.ok) { 
        const error = await response.json();
        throw new Error(error.message || "Request failed")};
   
    return result}

    catch(error:any) {
        console.error("Errorposting product:", error);
        throw new Error(error)} 
  }