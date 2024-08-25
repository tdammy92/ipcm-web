import { useQuery } from "@tanstack/react-query";
import { ApiClient } from "../api/ApiClient";

const getExams = async (params) => {
  const response = await ApiClient("exams", {params});
  return response?.data;
};

export const useExams = ({params}) => {
  return useQuery({
    queryKey: ["exams",params?.type],
    queryFn:() =>getExams(params),
  });
};



const getExambyId = async (id) => {
  const response = await ApiClient(`exams/${id}`,{});
  return response?.data;
};



export const useExam = ({params}) => {
  return useQuery({
    queryKey: ["exams",params?.id],
    queryFn:() =>getExambyId(params?.id),
    enabled:!!params?.id
  });
};