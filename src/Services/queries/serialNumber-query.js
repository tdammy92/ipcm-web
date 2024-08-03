import { useQuery } from "@tanstack/react-query";
import { ApiClient } from "../api/ApiClient";

const getSerialNumber = async () => {
    const response = await ApiClient("serial", {});
    return response?.data;
  };
  
  export const useSerialNumber = () => {
    return useQuery({
      queryKey: ["serial-number"],
      queryFn: getSerialNumber,
    });
  };