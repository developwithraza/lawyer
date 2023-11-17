import axios from "axios"
const baseURL='https://shlok-mittal-lawyer-backend.vercel.app/api/v1/admin'




//session Storage Data
const lowyer= JSON.parse(sessionStorage.getItem('userInfo') || '{}');
 const token=lowyer.accessToken
console.warn(token)
 //login section
export  const  Services={
    loginUrl:`${baseURL}/login` ,
    allLawyer : `${baseURL}/lawyer`
   

     
}
export const LoginLawyer=async (body)=>{
    const showSlot=await axios.post(Services.loginUrl,body)
    return showSlot
  }
export const AllLowyers=async ()=>{
    const low=await axios.get(Services.allLawyer, { headers: {"Authorization" : `Bearer ${token}`} })
    return low
} 






