import React from 'react';

export default class App extends React.Component {

  state = {
    astronauts: []
  }

  render() {
    return (
      <div>
        {this.state.astronauts.map(person => person.name)}
      </div>
    )
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then(data => {
        this.setState({
          astronauts: data.people
        })
      })
  }

}
