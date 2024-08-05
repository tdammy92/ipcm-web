import { useQuery } from "@tanstack/react-query";
import { ApiClient } from "../api/ApiClient";

const getExam = async (params) => {
  const response = await ApiClient("exams", {params});
  return response?.data;
};

export const useExams = ({params}) => {
  return useQuery({
    queryKey: ["exams",params?.type],
    queryFn:() =>getExam(params),
  });
};

