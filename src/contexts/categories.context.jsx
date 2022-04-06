import { createContext, useState, useEffect } from "react";

import { getCollectionAndDocuments } from "../Utils/firebase/firebase.js";

export const CategoriesContext = createContext({
    categoriesMap: {},
});

export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState({} );
   
   useEffect(() => {
       const getCategoriesMap = async () => {
           const categoryMap = await getCollectionAndDocuments();
           console.log(categoryMap);
           setCategoriesMap(categoryMap);
       }

       getCategoriesMap();
   },[]);
    
   
   
    const value = {categoriesMap};
    return(
        <CategoriesContext.Provider value={value}> {children} </CategoriesContext.Provider>
    )
}

