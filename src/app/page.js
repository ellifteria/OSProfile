"use client";

import React, { useState } from 'react';
import AboutMe from './AboutMe';
import Research from './Research'
import DateTime from './DateTime';

export default function App() {
  const [maxZIndex, setMaxZIndex] = useState(4);
  const [aboutMeVisible, setAboutMeVisible] = useState(false);
  const [researchVisible, setResearchVisible] = useState(false);

return (
  <div className="os">
  <div className="navbar-container"><div className="navbar-text"><DateTime/></div></div>
  <div className="desktop-icons">
  <button className="icon" onClick={() =>setAboutMeVisible(true)} style={{gridColumn: 1, gridRow: 1}}>About Me</button>
  <button className="icon" onClick={() =>setResearchVisible(true)} style={{gridColumn: 1, gridRow: 2}}>Research</button>
  <AboutMe
  initialZIndex={3}
  maxZIndex = {maxZIndex}
  maxZIndexStateHandler = {setMaxZIndex}
  visible = {aboutMeVisible}
  closeWindow = {() => setAboutMeVisible(false)}
  />
  <Research
  initialZIndex={4}
  maxZIndex = {maxZIndex}
  maxZIndexStateHandler = {setMaxZIndex}
  visible = {researchVisible}
  closeWindow = {() => setResearchVisible(false)}
  />
  </div>
  </div>
);
}
