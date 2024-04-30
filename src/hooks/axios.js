import React, { useState } from "react";
import { v1 as uuid } from "uuid";
import axios from "axios";

const useAxios = (initialState) => {
    const [cards, setCards] = useState(initialState);
    
    const addCard = async () => {
        try {
            const response = await axios.get("https://deckofcardsapi.com/api/deck/new/draw/");
            console.log("Response:", response.data);
            setCards(cards => [...cards, { ...response.data, id: uuid() }]);
        } catch (error) {
            console.error("Error fetching card:", error);
        }
    };
    console.log("Cards:", cards);
    
    return [cards, addCard];
};
    
export default useAxios;