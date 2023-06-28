import React from 'react';
import ListItems from './ListItems';

 const List = ({listx}) =>{
  return(
    // code here
   <ul id="list">
      <li className="items" />
      {listx.map((item) => (
        <Fragment key={item}>
          <ListItems />
        </Fragment>
      ))}
    </ul>
     
    
  )
}

export default List;
