import React from 'react';
import ListItems from './ListItems';

 
 const List = ({ listx }) => {
    <>
      {listx.length > 0 && (
        <ul id="list">
          <li className="items">{listx[1].valuex}</li>
          {listx.map((item) => (
            <ListItems key={item.id} text={item.valuex} />
          ))}
        </ul>
      )}
    </>
  );
};

export default List;
