
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ApiClient } from "../api/ApiClient";
import { toast } from "react-toastify";

const uploadExam = async (payload) => {
    const response = await ApiClient(`exams/upload`, {method:'POST',data:payload});
  return response;
};

export const useUploadExam = () => {
    const queryClient = useQueryClient();
  return useMutation({
    mutationFn:({payload}) =>uploadExam(payload),
    onMutate: () => {},
    onSuccess: async(_,variables,ctx) => {
        console.log({variables})
        toast.success(`Exam Uploaded Succesfully`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            // pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
      await queryClient.invalidateQueries({ queryKey: ["exams"] });
    },
    onError: (error, variables, context) => {},
  });
};