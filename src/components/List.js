import React from 'react';
import ListItems from './ListItems';
const List = ({ listx }) => {
  return (
    <ul id="list">
      {listx.map((item) => (
        <ListItems key={item} text={item} />
      ))}
    </ul>
  );
};

export default List;
 


