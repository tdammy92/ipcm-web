import axios from "axios"

export const loginUser = async(values)=>{

    const response = await axios.post(`${BaseUrl}auth/login`, values, {
        headers: {
          "Content-Type": "application/json",
        },
      })


      return response;

}





export const useLogin =  ()  =>{
    return useMutation({
        mutationFn: loginUser,
        onMutate:()=>{

        },
        onSuccess:()=>{

        },
        onError:(error,variables,context)=>{

        }
    })

}