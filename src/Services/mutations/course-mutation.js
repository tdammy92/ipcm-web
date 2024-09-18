
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ApiClient } from "../api/ApiClient";
import { toast } from "react-toastify";

const createCouse = async (payload) => {
    const response = await ApiClient(`course/create`, {method:'POST',data:payload});
  return response;
};


const updateCourse = async (payload) => {
    const response = await ApiClient(`course/update-course`, {method:'PATCH',data:payload});
  return response;
};

const deleteCourse = async (payload) => {

  console.log("client fnct",{payload})
    const response = await ApiClient(`course/${payload?.id}`, {method:'DELETE',data:payload});
  return response;
};



export const useCreateCourse = () => {
    const queryClient = useQueryClient();
  return useMutation({
    mutationFn:({payload}) =>createCouse(payload),
    onMutate: () => {},
    onSuccess: async(_,variables,ctx) => {
   
        toast.success(`Course created Succesfully`, {
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            // pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
      await queryClient.invalidateQueries({ queryKey: ["courses"] });
    },
    onError: (error, variables, context) => {},
  });
};

export const useDeleteCourse = () => {
    const queryClient = useQueryClient();
  return useMutation({
    mutationFn:({payload}) =>{
      console.log("from mutate  ==>",{payload})
    return  deleteCourse(payload)
    },
    onMutate: () => {},
    onSuccess: async(_,variables,ctx) => {
   
        toast.success(`Course deleted Succesfully`, {
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            // pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
      await queryClient.invalidateQueries({ queryKey: ["courses"] });
    },
    onError: (error, variables, context) => {},
  });
};



export const useUpdateCourse = () => {
    const queryClient = useQueryClient();
  return useMutation({
    mutationFn:({payload}) =>updateCourse(payload),
    onMutate: () => {},
    onSuccess: async(_,variables,ctx) => {
   
        toast.success(`Course updated Succesfully`, {
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            // pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
      await queryClient.invalidateQueries({ queryKey: ["courses"] });
    },
    onError: (error, variables, context) => {},
  });
};