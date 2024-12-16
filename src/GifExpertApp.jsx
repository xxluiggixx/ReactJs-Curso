import { useState } from "react"
import { AddCategory, GiftGrid } from "./componets"

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([])
  
  const addCategory = (category) => {
        
      const lowerCategory = category.toLowerCase();
      if (categories.includes(lowerCategory)) return;
      setCategories([lowerCategory,...categories])
  }

  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory onNewCategory={ addCategory }/>

        { categories.map((category)=> <GiftGrid category={category}/> )}
    </>
  )
}
