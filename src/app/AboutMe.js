import React from 'react';
import Window from "./Window";

function AboutMe({ initialZIndex, maxZIndex, maxZIndexStateHandler, visible, closeWindow }) {

    return <Window
    key="AboutMe"
    windowTitle = "About Me"
    initialZIndex = {initialZIndex}
    maxZIndex = {maxZIndex}
    maxZIndexStateHandler = {maxZIndexStateHandler}
    visible={visible}
    closeWindow={closeWindow}
    content={
        <div>
            <p>Hello, World! My name is Elli Beres.</p>
        </div>
    }
    />
}

export default AboutMe
