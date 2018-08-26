import React, { Component } from 'react';
import './App.css';
import FirstComponent from './Components/FirstComponent'
class App extends Component {
  state=
  {
    persons:[
      
        {nam:"Fazeel",clss:"BSSE"},
        {nam:"Abdul Wahab",clss:"BSCS"},
        {nam:"Adeel",clss:"BSIT"}
      
    ],
    otherState: 'Some Value'

  }
switchNameHandler=()=>
{
 // console.log("Button Clicked!");
 this.setState(
   {
     persons:
     [
  {
    nam:"Muhammad Fazeel",clss:"BSSE"
  },
  
  {
    nam:"Abdul Wahab",clss:"BSCS"
  },
  {
    nam:"Adeel",clss:"BSSE"
  }

    ]
  }
            )
}

  render() {
   return (
      <div className="App">
        <h1>Hi I Am React</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <FirstComponent name={this.state.persons[0].nam} class={this.state.persons[0].clss} click={this.switchNameHandler} />
        <FirstComponent name={this.state.persons[1].nam} class={this.state.persons[1].clss} >And I Am a Tanter</FirstComponent>
        <FirstComponent name={this.state.persons[2].nam} class={this.state.persons[2].clss} />
      </div>
    );
   // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Working'));
  }
}

export default App;
