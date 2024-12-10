import { useState } from "react"
import { AddCategory } from "./componets/AddCategory"

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch','Dragon Ball'])
  
  const addCategory = (category) => {
        
      const lowerCategory = category.toLowerCase();
      if (categories.includes(lowerCategory)) return;
      setCategories([lowerCategory,...categories])
  }

  return (
    <>
        <h1>GifExpertApp</h1>
          <AddCategory onNewCategory={ addCategory }/>
        <ol>
            { categories.map((category)=>{

                return <li key={category}> {category}</li>
              }
            )
            }

        </ol>
    </>
  )
}
