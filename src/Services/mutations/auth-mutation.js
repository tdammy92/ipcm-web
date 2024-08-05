import axios from "axios";
import { BaseUrl } from "../api/BaseUrl";
import { useMutation } from "@tanstack/react-query";

const loginUser = async (values) => {
  const response = await axios.post(`${BaseUrl}auth/login`, values, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
};

export const useLogin = () => {
  return useMutation({
    mutationFn: loginUser,
    onMutate: () => {},
    onSuccess: () => {},
    onError: (error, variables, context) => {},
  });
};
