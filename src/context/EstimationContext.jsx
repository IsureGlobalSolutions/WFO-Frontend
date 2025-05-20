// EstimationContext.js
import React, { createContext, useState, useContext } from 'react';

const EstimationContext = createContext();

export const EstimationProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedFTE, setSelectedFTE] = useState('');
  const [selectedfile, setselectedfile] = useState('');
  const [Currency , setCurrency] = useState('');
  const [ftefilename, setftefilename] = useState("");

  return (
    <EstimationContext.Provider value={{ ftefilename , setftefilename , setselectedfile , Currency , setCurrency , selectedfile ,selectedCategory, setSelectedCategory, selectedDepartment, setSelectedDepartment, selectedFTE, setSelectedFTE }}>
      {children}
    </EstimationContext.Provider>
  );
};

export const useEstimation = () => useContext(EstimationContext);
