import { useMutation,useQueryClient } from "@tanstack/react-query";
import { ApiClient } from "../api/ApiClient";
import { toast } from "react-toastify";

const generateSerial = async () => {
    const response = await ApiClient(`serial/generate`, {method:'POST'});
  return response;
};

export const useGenerateSerial = () => {
const queryClient = useQueryClient();
  return useMutation({
    mutationFn:generateSerial,
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