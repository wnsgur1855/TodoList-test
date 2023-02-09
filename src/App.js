import React, { useState } from 'react';
import './App.css';

function App() {
  const [content, setContent] = useState('');
  const [add, setAdd] = useState([]);
  const [count, setCount] = useState(0);

  const clickAddHandler = () => {
    setAdd([...add, { id: add.length + 1, content: content }]);
  };

  const clickDeletHandler = (id) => {
    setAdd(add.filter((item) => item.id !== id));
    alert('dd');
  };

  const clickCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="entireBox">
      <div className="titleBox">
        <input
          value={content}
          onChange={(event) => {
            setContent(event.target.value);
          }}
          type="text"
          className="inputBox"
        />
        <button onClick={clickAddHandler}>추가하기</button>
        <br />
      </div>
      <div className="todolistBox">Todo List</div> <br />
      <div className="largeBox">
        {add.map((item) => {
          return (
            <div key={item.id} className="smallBox">
              {item.content} <br />
              <button className="countsytle" onClick={clickCount}>
                👍
              </button>
              <button className="buttonStyle" onClick={() => clickDeletHandler(item.id)}>
                💟
              </button>
              <div>👍{count}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
