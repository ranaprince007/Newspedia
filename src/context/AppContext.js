import { createContext, useState } from "react";

const CategoryContext = createContext();

export default CategoryContext;

export const CategoryProvider = ({ children }) => {
  const [category, setCategory] = useState('general');
  let contextData = {
    category: category,
    setCategory: setCategory
  };

  return (
    <CategoryContext.Provider value={contextData}>
      {children}
    </CategoryContext.Provider>
  );
};