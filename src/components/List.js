import React from 'react';
import ListItems from './ListItems';

 const List = ({listx}) =>{
  return(
    // code here
   <ul>
      {listx.map((item) => (
        <ListItems key={item} />
      ))}
    </ul>
    
     
    
  )
}

export default List;
