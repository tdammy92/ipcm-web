import axios from "axios";



const headers = {
'accept': 'application/json',
'Content-Type':'application/json',
"X-CSCAPI-KEY":`${process.env.REACT_APP_COUNTRY_API_KEY}`
}



export const getCountries = async()=>{
const res = await axios.get(`${process.env.REACT_APP_COUNTRY_API}`,{headers:headers});
return res?.data
}


export const getStates = async(stateCode)=>{
const res =await  axios.get(`${process.env.REACT_APP_COUNTRY_API}/${stateCode}/states`,{headers:headers});
return res?.data
}

