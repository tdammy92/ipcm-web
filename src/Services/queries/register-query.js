import { useQuery } from "@tanstack/react-query";
import { getCountries, getStates } from "../api/countryService";



  export const useCountries = () => {
    return useQuery({
      queryKey: ["countries"],
      queryFn: getCountries,
    });
  };
  



  export const useStatesCountry = ({stateCode,enabled}) => {
    return useQuery({
      queryKey: ["states",stateCode],
      queryFn:()=> getStates(stateCode),
      enabled
    });
  };
  