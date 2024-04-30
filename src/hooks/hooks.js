import React, { useState, useEffect } from "react";
import axios from "axios";

const useFlipCard = (initialState) => {
    const [isFacingUp, setIsFacingUp] = useState(initialState);
    
    const flipCard = () => {
        setIsFacingUp((isUp) => !isUp);
      };
    
      return [isFacingUp, flipCard];
    };


function useAxios(keyInLS, baseUrl) {
        const [responses, setResponses] = useLocalStorage(keyInLS);
      
        const addResponseData = async (formatter = data => data, restOfUrl = "") => {
          const response = await axios.get(`${baseUrl}${restOfUrl}`);
          setResponses((data)=> [...data, formatter(response.data)]);
        };
      
        const clearResponses = () => setResponses([]);
      
        return [responses, addResponseData, clearResponses];
}

function useLocalStorage(key, initialValue = []) {
    if (localStorage.getItem(key)) {
      initialValue = JSON.parse(localStorage.getItem(key));
    }
    const [value, setValue] = useState(initialValue);
  
    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(value));
    }, [value, key]);
  
    return [value, setValue];
  }
  
  export default useLocalStorage;
    
export { useFlipCard, useAxios, useLocalStorage };

