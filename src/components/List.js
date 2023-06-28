import React from 'react';
import ListItems from './ListItems';

 
 const List = ({ listx }) => {
  const renderListItems = () => {
    const items = [];
    for (let i = 0; i < listx; i++) {
      items.push(<ListItems key={i} />);
    }
    return items;
  };

  return (
    <ul id="list">
      <li className="items" />
      {renderListItems()}
    </ul>
  );
};

export default List;
