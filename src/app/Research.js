import React from 'react';
import Window from "./Window";

function Research({ initialZIndex, maxZIndex, maxZIndexStateHandler, visible, closeWindow }) {

    return <Window
    key="Research"
    windowTitle="My Research"
    initialZIndex = {initialZIndex}
    maxZIndex = {maxZIndex}
    maxZIndexStateHandler = {maxZIndexStateHandler}
    visible={visible}
    closeWindow={closeWindow}
    content={
        <div>
            <p>I do research (allegedly).</p>
        </div>
    }
    />
}

export default Research
