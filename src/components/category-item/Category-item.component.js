import React from 'react';
import './category-item.style.scss';


const CategoryItem= ({id, title,imageUrl}) =>(
    <div 
         style={{
             backgroundImage: `url(${imageUrl})`
         }}
    
    
    className='category-item'>
    <div className='content-holder'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>know more</span>
    </div>
</div>
)

export default CategoryItem;