import './App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { thunkCharacter } from './redux/actions';
import CharacterCard from './CharacterCard';

class App extends Component {
  constructor() {
    super();
    this.state = {
      character: '',
    }
  }

  // handleChange = ({ target }) => {
  //   this.setState({
  //     character: target.value
  //   })
  // }

  render() {
    const { character } = this.state;
    const { dispatch } = this.props;
    return (
      <>
        <input
          type="text"
          onChange={ ({ target }) => this.setState({  character: target.value }) }
          // onChange={ this.handleChange() }
        />

        <button
          type="button"
          onClick={ () => dispatch(thunkCharacter(character)) }
        >
          Search
        </button>
        <CharacterCard />
      </>
    )
  } 
}

export default connect()(App);
