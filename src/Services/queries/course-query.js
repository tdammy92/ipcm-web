import { useQuery } from "@tanstack/react-query";
import { ApiClient } from "../api/ApiClient";


const getAllCourses = async () => {
    const response = await ApiClient(`course`,{});
    return response?.data;
  };
  
  
  export const useCourses = () => {
    return useQuery({
      queryKey: ["courses"],
      queryFn:() =>getAllCourses(),
    });
  };