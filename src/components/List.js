import React from 'react';
import ListItems from './ListItems';

 
const List = (listx) => {
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    const inputValue = parseInt(document.getElementById('input').value);
    setCount(inputValue);
  };

  return (
    <>
      <input id="input" type="number" />
      <button id="button" onClick={handleButtonClick}>
        Click
      </button>
      <ul id="list">
        {[...Array(count)].map((_, index) => (
          <ListItems key={index} />
        ))}
      </ul>
    </>
  );
};

export default List;
