"use client";

import React, { useState } from 'react';
import Window from './Window';

export default function App() {
  const [maxZIndex, setMaxZIndex] = useState(3);
  const [windowList, setWindowList] = useState([]);
  
  function addNewWindow(content) {
    let newValue = maxZIndex + 1;
    setMaxZIndex(newValue);
    
    let newArray = windowList.concat({
      id: windowList.length,
      zIndex: newValue,
      content: content,
    });
    setWindowList(newArray);
  }
  
  function removeLastWindow() {
    let newArray = windowList.slice();
    newArray.pop();
    setWindowList(newArray);
  }
  
  function parentClickHandler(id) {
    let newValue = maxZIndex + 1;
    setMaxZIndex(newValue);
    
    let newArray = windowList.map((item) =>
      item.id === id ? { ...item, zIndex: newValue } : item
  );
  setWindowList(newArray);
}

return (
  <div className="window-container">
  <button onClick={() => {addNewWindow("hello,")}}>New Window</button>
  <button onClick={() => {addNewWindow("world!")}}>New Window</button>
  <button onClick={removeLastWindow}>Remove Window</button>
  {windowList.map((item) => (
    <Window
    key={item.id}
    zIndex={item.zIndex}
    parentClickHandler={() => parentClickHandler(item.id)}
    content={item.content}
    />
  ))}
  </div>
);
}
