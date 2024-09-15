import { useQuery } from "@tanstack/react-query";
import { ApiClient } from "../api/ApiClient";





 const getRecentStudents = async () => {
  const response = await ApiClient('student/recent',{});
  return response?.data;
};


export const useRecentStudents = ()  =>{
    return useQuery({
        queryKey: ["recent-students"],
        queryFn: getRecentStudents,
    })
}



const getStudentsCounts = async () => {
 const response = await ApiClient('student/count',{});
 return response?.data;
};



export const useStudentsCounts = ()  =>{
    return useQuery({
        queryKey: ["students-counts"],
        queryFn: getStudentsCounts,
    })
}



const getSerialNumberCount = async () => {
 const response = await ApiClient('serial/count',{});
 return response?.data;
};



export const useSerialNumberCounts = ()  =>{
    return useQuery({
        queryKey: ["serial-number-counts"],
        queryFn: getSerialNumberCount,
    })
}



const getCounts = async () => {
 const response = await ApiClient('admin/count',{});
 return response?.data;
};

export const useCounts = ()  =>{
    return useQuery({
        queryKey: ["counts"],
        queryFn: getCounts,
    })
}