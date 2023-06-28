import React from 'react';
import ListItems from './ListItems';

 
 const List = ({ listx }) => {
    <>
      {listx.length > 0 && (
        <ul id="list">
          <li className="items">{listx[0].valuex}</li>
          {listx.slice(1).map((valuex) => (
            <ListItems key={listx.id} text={listx.valuex} />
          ))}
        </ul>
      )}
    </>
  );
};

export default List;
