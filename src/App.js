// create your App component here

import React from 'react';

export default class App extends React.Component {

state = {
 astros: []
  }
  render() {
    return (
      <div>
        {this.state.astros.map(person => person.name)}
      </div>
    )
  }
  //fetch = () =>{

  //}
  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then(data => {
        this.setState({
          astros: data.people
        })
      })
  }
   //{this.state.astros.map(person => person.name)}<br></br>

     
       

}
