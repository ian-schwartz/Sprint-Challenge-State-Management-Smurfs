import React from 'react';
import axios from 'axios';

export default class SmurfForm extends React.Component {
    constructor() {
        super();
        this.state={ name: '', age: '', height: ''}
    }

handleChanges = e => {
    e.preventDefault();
    this.setState({
        [e.target.name]: e.target.value
    }) 
}

onSubmit = e => {
    e.preventDefault();

    const newSmurf = {
        name: this.state.name,
        age: this.state.age,
        height: this.state.height,
    }
    console.log(newSmurf)

    axios
      .post('http://localhost:3333/smurfs', newSmurf)
      .then(res => {
          console.log(res.data)
      })
      .catch (err => {
          console.log('error', err)
      })
  }

  render() {
      return (
          <div>
              <h1>Enter Smurf Village</h1>
              <form onSubmit={this.onSubmit}>
                  <input
                    className="name-input"
                    placeholder="name"
                    type="text"
                    value={this.state.name}
                    name="name"
                    onChange={this.handleChanges}
                    / >
                    <input
                    className="age-input"
                    placeholder="age"
                    type="number"
                    value={this.state.age}
                    name="age"
                    onChange={this.handleChanges}
                    / >
                    <input
                    className="height-input"
                    placeholder="height in cm"
                    type="text"
                    value={this.state.height}
                    name="height"
                    onChange={this.handleChanges}
                    / >
                    <button type="submit" className="join-btn">Join</button>
              </form>
          </div>
      )
  }
}

