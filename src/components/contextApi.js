/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { createContext, useState, useContext } from 'react';
const ToggleContext = createContext();


const contextApi = () => {
    const [myValue, setMyValue] = useState(false);

    const updateValue = (newValue) => {
      setMyValue(newValue);
    };
    return (
        <div>
            
        </div>
    );
};

export default contextApi;