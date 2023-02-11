import React from 'react';
// import {nome, desc} from './About';
import { aboutMe } from './About';

class App extends React.Component {
  render() {
    return  aboutMe()
      // <div>
      //   <h1>{nome}</h1>
      //   <p>{desc}</p>
      // </div>

  }
}

export default App;