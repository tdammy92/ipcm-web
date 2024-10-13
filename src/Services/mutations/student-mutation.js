import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ApiClient } from "../api/ApiClient";

const deleteStudents = async (id, payload) => {
  const response = await ApiClient(`student/${id}`, {
    method: "DELETE",
    data: payload,
  });
  return response;
};

export const useDeleteStudent = () => {
  return useMutation({
    mutationFn: ({ id, payload }) => deleteStudents(id, payload),
    onMutate: () => {},
    onSuccess: () => {},
    onError: (error, variables, context) => {},
  });
};

const deleteStudentsCertficate = async (id, payload) => {
  const response = await ApiClient(`certificate/${id}`, {
    method: "DELETE",
    data: payload,
  });
  return response;
};

export const useDeleteCertificate = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, payload }) => deleteStudentsCertficate(id, payload),
    onMutate: () => {},
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: "certificate" });
    },
    onError: (error, variables, context) => {},
  });
};
