import React from 'react';
import GifGridItem from './GifGridItem';
import { useFecth } from '../hooks/UseFetch';
//import { getGift } from '../helpers/GetGid';

const GifGrid = ({category}) => {

const {data,loading} = useFecth(category);


    /*const [images, setImages] = useState([]);

    const [count, SetCount] = useState(0);
    useEffect(()=>{
        getGift(category)
        .then(setImages)
    }, [category])
   */ 
    return ( 
        <>
        <h3>{category}</h3>
        {loading  && <p className= "animate__animated animate__flash">Cargando...</p>}
          <div className="card-grid">
                
          
            {
                 
                data.map( img =>(
                <GifGridItem
                key={img.id}
                
                { ...img }
                


                />
                ))
                
            }
     
        </div>
        </>
     );
}
 
export default GifGrid;
