// create your App component here
import React, { Component } from 'react'

class App extends Component {
  state = {

  }
  componentDidMount(){
    fetch('http://api.open-notify.org/astros.json')
    .then(res => res.json())
    .then(data => {
      this.setState({
        
      })
    })
  }

  render(){

  }
}

export default App
