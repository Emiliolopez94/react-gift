import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GiftGrid';

const GifExpertApp = () => {
  
    const[categories, Setcategories] = useState(['One punch']);   


    return (
        <>
        <h2>GifExpertApp</h2>
        <AddCategory
        Setcategories = {Setcategories}
        
        />
        <hr/>

        
       
        {
           <ol>
               {
                   categories.map( (category) => 
                    <GifGrid 
                    key={category}
                    category={category}
                    
                    
                    />
                   )
               }
           </ol>
        }
        </>
      );
}
 
export default GifExpertApp;