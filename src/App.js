import React from 'react';

class App extends React.Component {
    state = {
        aliens: []
    }

    render() {
        return(
            <div>
                {this.state.aliens.map(people => people.name)}
            </div>
        )
    };

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(response => response.json())
        .then(data => {
            this.setState({
                aliens: data.people
            })
        })
    };
};

export default App;