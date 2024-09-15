import { useQuery } from "@tanstack/react-query";
import { ApiClient } from "../api/ApiClient";

const getGallery = async () => {
  const response = await ApiClient("gallery", {});
  return response?.data;
};

export const useGallery = () => {
  return useQuery({
    queryKey: ["gallery"],
    queryFn: getGallery,
  });
};

