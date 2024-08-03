import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ApiClient } from "../api/ApiClient";
import { toast } from "react-toastify";

const uploadGalleryImage = async (payload) => {
  const response = await ApiClient(`gallery/upload`, {
    method: "POST",
    data: payload,
  });
  return response;
};

export const useUploadGallery = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload) => uploadGalleryImage(payload),
    onMutate: () => {},
    onSuccess: async () => {
        toast.success(`Uploaded Succesfully`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            // pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
      await queryClient.invalidateQueries({ queryKey: ["gallery"] });
    },
    onError: (error, variables, context) => {
      toast.error(`${typeof error === "string" ? error : error?.message}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        // pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    },
  });
};

const deleteGalleryImage = async (id, payload) => {
  const response = await ApiClient(`gallery/${id}`, {
    method: "DELETE",
    data: payload,
  });
  return response;
};

export const useDeleteGallery = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, payload }) => deleteGalleryImage(id, payload),

    onMutate: () => {},
    onSuccess: async () => {
      toast.success(`Deleted Succesfully`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        // pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      await queryClient.invalidateQueries({ queryKey: ["gallery"] });
    },
    onError: (error, variables, context) => {
      // toast.error(`${typeof error === "string" ? error : error?.message}`, {
      toast.error(`Image could nit be deleted`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        // pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    },
  });
};
