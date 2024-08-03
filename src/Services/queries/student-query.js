import { useQuery } from "@tanstack/react-query";
import { ApiClient } from "../api/ApiClient";

const getStudents = async () => {
  const response = await ApiClient("student", {});
  return response?.data;
};

export const useStudents = () => {
  return useQuery({
    queryKey: ["students"],
    queryFn: getStudents,
  });
};

const getStudent = async (id) => {
  const response = await ApiClient(`student/${id}`, {});
  return response?.data;
};

export const useStudent = ({ id, enabled }) => {
  return useQuery({
    queryKey: ["student", id],
    queryFn: () => getStudent(id),
    enabled,
  });
};
