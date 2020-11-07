// REGULAR IMPORTS
import React from 'react';
import { Dropdown } from 'semantic-ui-react';

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
    championList: [], // we have this list of champion instances...
  }

  findKeyInJSON(name, obj) {
    return obj[name];
  }

  addItemToChampion = (championName, itemObj) => {
    let { championList } = this.state;
    let champObj = championList.find(c => c.name == championName);
    let champItems = champObj.items;
    champItems.push(itemObj)
  }

  addChampionToList = (champName) => {
    if (this.state.championList.some(c => c.name == champName)) return;
    let newChampObject = this.scaleChampionByLevel(champName, 1);
    newChampObject.items = new Array(6).fill(null);
    this.setState(st => ({ championList: [...st.championList, newChampObject] }))
  }

  /* Takes in a champion object, and a number and
     and returns the champion object with its stats changed by level,
     then update the relevant champion in the championList

     Return a new copy of the statsObj

     // return the object {
       health: 760
       mana: 350
       ...
     }
  */
  scaleChampionByLevel = (champName, level) => {
    let newChampObject = { ...champdata[champName] }
    let currentStats = {};
    for (let key of Object.keys(newChampObject.stats)) {
      currentStats[key] = newChampObject.stats[key].flat
    }
    newChampObject.currentStats = currentStats;
    return newChampObject
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
        <div className="championlist-container">
          {championList.map(c =>
            <Champion {...c}>
              <Box className={"abilities-container"}>
                <Abilities {...c} />
              </Box>
              <Box className={"stats-container"}>
                <Stats {...c} />
              </Box>
              <Box className={"items-container"}>
                <Items
                  itemdata={itemdata}
                  addItemToChampion={this.addItemToChampion}
                  {...c} />
              </Box>
            </Champion>
          )}
        </div>
      </>
    )
  }
}

export default App;
