import React, { useState } from 'react';
import Draggable from 'react-draggable';

function Window({ windowTitle, initialZIndex, maxZIndex, maxZIndexStateHandler, visible, closeWindow, content }) {

    const [zIndex, setZIndex] = useState(initialZIndex);

    function clickHandler() {
        let newMaxZIndex = maxZIndex + 1;
        setZIndex(newMaxZIndex);
        maxZIndexStateHandler(newMaxZIndex)
    }
    
    return (
        <Draggable handle=".drag-handle" onMouseDown={clickHandler} bounds="parent">
        <div className="window" style={{ zIndex: zIndex, visibility: visible ? "visible" : "hidden "}}>
        <div className="drag-handle">
        <button className="close-button" onClick={closeWindow}>X</button>
        <span className="window-title">
        <strong>
        {windowTitle}
        </strong>
        </span>
        </div>
        <div className="window-content">
        {content}
        </div>
        </div>
        </Draggable>
    );
}

export default Window;
