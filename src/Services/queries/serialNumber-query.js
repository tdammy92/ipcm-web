import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { ApiClient } from "../api/ApiClient";

const getSerialNumber = async () => {
    const response = await ApiClient("serial", {});
    return response?.data;
  };
  
  export const useSerialNumber = ({currentPage}) => {
    return useInfiniteQuery({
      queryKey: ["serial-number"],
      queryFn:({pageParam=currentPage})=> getSerialNumber(pageParam),
      
    });
  };