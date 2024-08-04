import { useMutation,useQueryClient } from "@tanstack/react-query";
import { ApiClient } from "../api/ApiClient";
import { toast } from "react-toastify";

const registerStudents = async (payload) => {
    const response = await ApiClient(`student/register`, {method:'POST',data:payload});
  return response;
};

export const useRgeisterStudent = () => {
const queryClient = useQueryClient();
  return useMutation({
    mutationFn:({payload})=>registerStudents(payload),
    onMutate: () => {},
    onSuccess: async() => {
        await queryClient.invalidateQueries({queryKey:["serial-number"]})
    },
    onError: (error, variables, context) => {
        toast.error(`${typeof error === "string" ? error : error?.message}`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            // pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    },
  });
};