
import React from 'react';
import './App.css';
import BasicGreeter from './BasicGreeter';
import Greeter from './Greeter';
import Die from './Die';
import DoubleDie from './DoubleDie';
import RandomImage from './RandomImage';
function App() {
  return (
    <>
    <div id='basic-greeter-heading' >
    <h1>This a basic greeter app</h1>
    <BasicGreeter person="Vinit" from="Sridhar"/>
    </div>
    <div>
      <h1>
        This is an example of default props
      </h1>
      <Greeter></Greeter>
    </div>
    <div>
      <h1>Dice example 1 </h1>
      <Die/>
    </div>
    <div>
    <h1>Dice example 2 </h1>
      <Die/>
      <Die/>
    </div>
    <div>
      <h1>Double Die Example</h1>
      <DoubleDie/>
    </div>
    <RandomImage src="https://picsum.photos/200/300" alt='Random Imagw'></RandomImage>
    </>

  );
}

export default App;
