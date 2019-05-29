// create your App component here
import React, { Component } from 'react';

class App extends Component {
constructor(){
super();

this.state = {
 astros:[]
  }
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

      render() {
        return (
          <div>
            {this.state.astros.map(person => person.name)}
          </div>
        )
       }
       

}
export default App;