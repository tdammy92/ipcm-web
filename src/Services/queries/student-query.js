import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { ApiClient } from "../api/ApiClient";

const getStudents = async () => {
  const response = await ApiClient("student", {});
  return response?.data;
};

export const useStudents = ({currentPage}) => {
  return useInfiniteQuery({
    queryKey: ["students",currentPage],
    queryFn:({})=> getStudents(),
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



const getAllCertificate = async (id) => {
  const response = await ApiClient(`certificate`, {});
  return response?.data;
};


export const useAllCertificate = () => {
  return useQuery({
    queryKey: ["certificate"],
    queryFn: getAllCertificate,
  });
};