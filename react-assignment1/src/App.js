import React, { Component } from 'react';
import './App.css';
import Fruit from './Fruit/Fruit' 
import './Fruit/Fruit.css'

class App extends Component {

  state= {
    fruits: [
      {name: "mango", quantity: 20}
    ]
  };

  submitHandler= () => {
    let newItem=document.getElementById("item").value;
    const [name,quantity]= newItem.split("-");    

    const newFruits=[...this.state.fruits];

    newFruits.push({
      name:name,
      quantity:quantity
    })

    this.setState({fruits:newFruits})
    document.getElementById("item").value="";
  };

  onPressEnter= (event) => {
    if(event.key==="Enter"){
      this.submitHandler();      
    }
  };

  deleteFruitHandler=(fruitsIndex) => {
    const fruits= [...this.state.fruits];
    fruits.splice(fruitsIndex, 1);
    this.setState({fruits: fruits})
  }

  render() {
    return (
      <div className="App">
        <h1>React assignment 1</h1>
        <h3>Enter the Fruit</h3>

        <input type="text" id="item" placeholder="name-quantity" onKeyDown={this.onPressEnter}></input>
        <br/><br/>
        <button onClick={this.submitHandler} 
                onKeyDown={this.onPressEnter}>Submit</button>

        <table>
          {
            this.state.fruits.map((index)=>{
              return <Fruit name={index.name}
                           quantity={index.quantity} 
                           click={() => this.deleteFruitHandler(index)}/>
            })
          }
        </table>

      </div>
    );
  }
}

export default App;