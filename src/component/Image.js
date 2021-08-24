import React from 'react';

const Image = ({imagesrc}) => {
    return ( 
    
        <img src={`/cards/${imagesrc}.png`} alt={`Illustration of ${imagesrc}`} className='h-32 w-auto m-3 inline-block shadow-xl' />
     );
}
 
export default Image;