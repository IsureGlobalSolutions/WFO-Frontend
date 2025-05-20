// EstimationContext.js
import React, { createContext, useState, useContext } from 'react';

// Create a Context for the estimation data
const EstimationContext = createContext();

// Create a Provider component
export const EstimationProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedFTE, setSelectedFTE] = useState('');

  return (
    <EstimationContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
        selectedDepartment,
        setSelectedDepartment,
        selectedFTE,
        setSelectedFTE,
      }}
    >
      {children}
    </EstimationContext.Provider>
  );
};

// Custom hook to use the EstimationContext
export const useEstimationContext = () => {
  return useContext(EstimationContext);
};
