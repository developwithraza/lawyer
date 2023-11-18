import axios from "axios"
const baseURL='https://shlok-mittal-lawyer-backend.vercel.app/api/v1/admin'


export const languageList = [
    { key: 1, values: "Hindi" },
    { key: 2, values: "English" },
    { key: 3, values: "Telgu" },
    { key: 4, values: "marathi" },

]
export const ExpList = [
    { key: 1, values: "1 year" },
    { key: 2, values: "2 year" },
    { key: 3, values: "3 year" },
    { key: 5, values: "4 year" },
    { key: 6, values: "5 year" },
    { key: 7, values: "6 year" },
    { key: 8, values: "7 year" },
    { key: 9, values: "8 year" },
    { key: 10, values: "9 year" },
    { key: 11, values: "10 year" },
    { key: 12, values: "11 year" },

]



//session Storage Data
const lowyer= JSON.parse(sessionStorage.getItem('userInfo') || '{}');
export const token=lowyer.accessToken
console.warn(token)
 //login section
export  const  Services={
    loginUrl:`${baseURL}/login` ,
    allLawyer : `${baseURL}/lawyer`,
    coutCat : `${baseURL}/CourtCategory`,
    addLawyer :`${baseURL}/CreateLawyer`

   

     
}
export const LoginLawyer=async (body)=>{
    const showSlot=await axios.post(Services.loginUrl,body)
    return showSlot
  }
export const AllLowyers=async ()=>{
    const low=await axios.get(Services.allLawyer, { headers: {"Authorization" : `Bearer ${token}`} })
    return low
} 
export const CourtCategory=async ()=>{
    const cat=await axios.post(Services.coutCat, { headers: {"Authorization" : `Bearer ${token}`} })
    return cat
} 
export const CreateLawyer=async (body)=>{
    const add=await axios.post(Services.addLawyer, body , {headers: {"Authorization" : `Bearer ${token}`}})
    return add
} 





