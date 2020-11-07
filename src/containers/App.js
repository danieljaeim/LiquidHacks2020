// REGULAR IMPORTS
import React from 'react';

// STYLESHEETS
import '../css/App.css';

// STATIC INFO JSON FILES
import champdata from '../data/champions.json'
import itemdata from '../data/items.json'

// IMPORTING CONTAINERS
import Champion from './Champion';
import Searchbar from './Searchbar';
import Items from './Items';
import Stats from './Stats'
import Abilities from './Abilities';
import Runes from './Runes';

//IMPORT DUMMY COMPONENTS
import Box from '../components/Box';

class App extends React.Component {

  state = {
    championList: [],
    itemsList: []
  }

  findKeyInJSON(name, obj) {
    return obj[name];
  }


  addChampionToList = (champName) => {
    this.setState(st => ({championList: [...st.championList, {...champdata[champName]}]}))
  }

  /* Takes in a champion object, and a number and
     and returns the champion object with its stats changed by level
  */
  scaleChampionByLevel = (champObj, level) => {
    /* 
      CODE HERE
    */
    return;
  }

  /* Takes in a champion object, and an itemsObject and returns a champion Object with
     stats changed, based on the item
  */
  applyItemToChampion = (itemObj, champObj) => {
    /* 
      CODE HERE
    */
    return;
  }


  render() {
    const { championList } = this.state;

    return (
      <>
      <Searchbar 
        champdata={champdata}
        addChampionToList={this.addChampionToList}
        />
        {championList.map(c =>
          <Champion {...c}>
            <Box className={"abilities-container"}>
              <Abilities />
            </Box>
            <Box className={"stats-container"}>
              <Stats />
            </Box>
            <Box className={"items-container"}>
              <Items />
            </Box>
          </Champion>
        )}
      </>
    )
  }
}

export default App;
