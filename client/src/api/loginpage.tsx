type Loginform={
    email:string
    password:string}



export async function login(formData:Loginform,
    setMessage: React.Dispatch<React.SetStateAction<string>>,
    setIsLoggedin: (value: boolean) => void  ,
    navigate: (path: string) => void){
   

    if (!formData.email || !formData.password){
        setMessage('Error: Enter a valid username and password');
      return;}
    try{
    const response=await fetch("http://localhost:5000/login",{
        method: "POST",
        headers: {
          "Content-Type": "application/json", 
        },
        body: JSON.stringify(formData),
        credentials: "include",
    
    })
    
    const data = await response.json();
    if (response.status === 403) {
        //  already authenticated, redirect to home
        
        
        navigate("/");
        alert('you are already logged in!')}
       
    else if (!response.ok) { 
        throw new Error(data.message || "Login failed")};
    
    setIsLoggedin(true);
    setMessage(`Welcome, ${data.username || "User"}!`)
    navigate('/');
        }
    catch(error:any) {
        console.error("Error logging in:", error);
        setMessage(error.message || "Error logging in. Check username and password.");}
    
     }