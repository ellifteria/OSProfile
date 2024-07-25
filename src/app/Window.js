import React, { useState } from 'react';
import Draggable from 'react-draggable';

function Window({ zIndex, parentClickHandler, content }) {
    const [visible, setVisibility] = useState(true);

    function clickHandler() {
        parentClickHandler();
    }
    
    function closeWindow() {
        setVisibility(false);
    }
    
    return (
        <Draggable handle=".drag-handle" onMouseDown={clickHandler} bounds="parent">
        <div className="window" style={{ zIndex: zIndex, visibility: visible ? "visible" : "hidden "}}>
        <div className="drag-handle">
        <button className="close-button" onClick={closeWindow}>X</button>
        <span className="window-title">
        <strong>
        Drag here
        </strong>
        </span>
        </div>
        {content}
        </div>
        </Draggable>
    );
}

export default Window;
