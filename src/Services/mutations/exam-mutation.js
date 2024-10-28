
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ApiClient } from "../api/ApiClient";
import { toast } from "react-toastify";
import { VariantContext } from "@material-ui/pickers/wrappers/Wrapper";

const uploadExam = async (payload) => {
    const response = await ApiClient(`exams/upload`, {method:'POST',data:payload});
  return response;
};



const addExamToStudent = async (payload) => {
    const response = await ApiClient(`exams/addExamToStudent`, {method:'POST',data:payload});
  return response;
};

const reomveStudentExam = async (payload) => {
  const response = await ApiClient(`exams/removeStudentExam/${payload.id}`, {method:'DELETE',data:payload});
  return response;
};

const startExam = async (payload) => {
    const response = await ApiClient(`exams/StartStudentExam`, {method:'POST',data:payload});
  return response?.data;
};


const submitResult = async (payload) => {
    const response = await ApiClient(`result/submit`, {method:'POST',data:payload});
  return response?.data;
};

const createCertificate = async (payload) => {
    const response = await ApiClient(`certificate/create`, {method:'POST',data:payload});
  return response;
};

export const useUploadExam = () => {
    const queryClient = useQueryClient();
  return useMutation({
    mutationFn:({payload}) =>uploadExam(payload),
    onMutate: () => {},
    onSuccess: async(_,variables,ctx) => {
        console.log({variables})
        toast.success(`Exam Uploaded Succesfully`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            // pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
      await queryClient.invalidateQueries({ queryKey: ["exams"] });
    },
    onError: (error, variables, context) => {},
  });
};


export const useAddExamToStudent = () => {
    const queryClient = useQueryClient();
  return useMutation({
    mutationFn:({payload}) =>addExamToStudent(payload),
    onMutate: () => {},
    onSuccess: async(_,variables,ctx) => {
        console.log({variables})
        toast.success(`Exam Added Succesfully`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
    queryClient.invalidateQueries({ queryKey: ["student-exams"] });
    // queryClient.invalidateQueries({ queryKey: ["student", variables?.payload?.studentId] });
    },
    onError: (error, variables, context) => {},
  });
};


export const useRemoveExamfromStudent = () => {
    const queryClient = useQueryClient();
  return useMutation({
    mutationFn:({payload}) =>reomveStudentExam(payload),
    onMutate: () => {},
    onSuccess: async(_,variables,ctx) => {
        console.log({variables})
        toast.success(`Exam removed Succesfully`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
    queryClient.invalidateQueries({ queryKey: ["student-exams"] });
    },
    onError: (error, variables, context) => {},
  });
};



export const useCreateCertificate = () => {
    const queryClient = useQueryClient();
  return useMutation({
    mutationFn:({payload}) =>createCertificate(payload),
    onMutate: (variables) => {
    },
    onSuccess: async(_,variables,ctx) => {
   
        // toast.success(`Course created Succesfully`, {
        //     position: "top-center",
        //     autoClose: 4000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     // pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        //     theme: "light",
        //   });
      // await queryClient.invalidateQueries({ queryKey: ["courses"] });
    },
    onError: (error, variables, context) => {},
  });
};



export const useStartExam = () => {
    const queryClient = useQueryClient();
  return useMutation({
    mutationFn:({payload}) =>startExam(payload),
    onMutate: (variables) => {

    },
    onSuccess: async(_,variables,ctx) => {
    },
    onError: (error, variables, context) => {
           toast.error(typeof error==='string' ? `${error}` : `${error?.response?.data}`, {
            position: "bottom-center",
            autoClose: 4000,
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


export const useSubmitResult = () => {
    const queryClient = useQueryClient();
  return useMutation({
    mutationFn:({payload}) =>submitResult(payload),
    onMutate: (variables) => {

    },
    onSuccess: async(_,variables,ctx) => {
    },
    onError: (error, variables, context) => {
           toast.error(typeof error==='string' ? `${error}` : `${error?.response?.data}`, {
            position: "bottom-center",
            autoClose: 4000,
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