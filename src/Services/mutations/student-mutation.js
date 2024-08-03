import { useMutation } from "@tanstack/react-query";
import { ApiClient } from "../api/ApiClient";

const deleteStudents = async (id,payload) => {
    const response = await ApiClient(`student/${id}`, {method:'DELETE',data:payload});
  return response;
};

export const useDeleteStudent = () => {
  return useMutation({
    mutationFn:(id,payload) =>deleteStudents(id,payload),
    onMutate: () => {},
    onSuccess: () => {},
    onError: (error, variables, context) => {},
  });
};