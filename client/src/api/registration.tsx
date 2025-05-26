import { usertypes } from "../dropdown";
type Regform={
    firstname:string
    lastname:string
    usertype:usertypes
    phone:string
    email:string
    password:string
    confirmation:string}

function isStrongPassword(password:string) {
    return /[A-Z]/.test(password) &&
            /[a-z]/.test(password) &&
            /\d/.test(password) &&
            /[^A-Za-z0-9]/.test(password);
    }
 export async function Register(formData:Regform,
    setMessage: React.Dispatch<React.SetStateAction<string>>,
    setFormData: React.Dispatch<React.SetStateAction<Regform>>,
    navigate: (path: string) => void){
        const phoneRegex = /^[+]?[0-9]{7,15}$/;
   
    
    if (!formData.firstname||!formData.lastname||formData.usertype==usertypes.guest||!formData.phone||!formData.email || !formData.password|| !formData.confirmation){
        setMessage('Error: Pease fill all fields');
      return;}
    else if (!phoneRegex.test(formData.phone)) {
        setMessage("Invalid phone number. Use digits only, 7-15 characters, starting with country code eg +254.");
        return}
    else if ((formData.password).length < 8){
        setMessage('Error: Passwords must be at least 8 characters long');
        return
    }
    else if(!isStrongPassword(formData.password)){
        setMessage('Error: Password should contain a mixture of uppercase, lowercase, numbers and symbols');
        return
    }
    else if (formData.password !== formData.confirmation){
        setMessage('Error: Passwords do not match');
        return
    }console.log(formData.usertype)
    
    try{
        const submitdata={firstname:formData.firstname,lastname:formData.lastname,
            usertype:formData.usertype, phone:formData.phone,email:formData.email,password:formData.password}
    const response=await fetch("http://localhost:5000/register",{
        method: "POST",
        headers: {
          "Content-Type": "application/json", 
        },
        body: JSON.stringify(submitdata),
        credentials: "include",
    
    })
    
    const data = await response.json();
    if (response.status === 400) {
        //  already authenticated, redirect to home
        setMessage( data.message)
        setFormData({firstname:'',lastname:'',usertype:usertypes.guest,phone:"",email:'',password:'',confirmation:''})
        return}
       
    else if (!response.ok) { 
        throw new Error(data.message || "Registration failed")};
    setMessage(`success! you can now log in.`)
    navigate('/login');
    
        }
    catch(error:any) {
        console.error("Error in registration:", error);
        setMessage(error.message || "Error registering the account, please try again.");}
    
     }