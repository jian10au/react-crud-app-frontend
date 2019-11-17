import React from 'react';
import './App.css';
import Router from './Router'

class App extends React.Component{

  state = {}


async componentDidMount() {
  const response = await fetch("https://localhost:5000/products")
  const data = await response.json()
  this.setState = {data}

}


render(){ 
  console.log(this.state);
    return (
      <Router />
    );
  }
}

export default App;
