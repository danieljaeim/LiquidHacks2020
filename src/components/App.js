// REGULAR IMPORTS
import React, {Component} from 'react';

// STYLESHEETS
import '../css/App.css';

// STATIC INFO JSON FILES
import champdata from '../data/champions.json'
import itemdata from '../data/items.json'

class App extends React.Component {

  state = {
    championList: champdata,
    itemsList: itemdata
  }

  render() {
    return <div></div>
  }
}

export default App;
