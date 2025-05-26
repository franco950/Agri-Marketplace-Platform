export async function getHomeData(setMessage: React.Dispatch<React.SetStateAction<string>>,
  setProducts: React.Dispatch<React.SetStateAction<any>>){
   
  try{
  const response=await fetch(`http://localhost:5000/home`,{
      method: "GET",
      headers: {
        "Content-Type": "application/json", 
      },
      credentials: "include",
  
  })
  const data = await response.json();
  if (!response.ok) { 
      throw new Error(data.message || "Request failed")};
  
  setProducts(data)
      }
  catch(error:any) {
      console.error("Error retrieving products:", error);
      setMessage(error.message || "Error  retrieving products");} 
}