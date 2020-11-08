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

  addItemToChampion = (championName, itemKey) => {
    let { championList } = this.state;
    let champIndex = championList.findIndex(c => c.name == championName);
    let champObj = championList[champIndex];
    let itemObj = itemdata[itemKey]
    let emptySlot = champObj.items.findIndex(c => c == null);
    let champItemList = champObj.items;

    /* Apply the item to the Champion's itemStats object */

    if (!champObj.itemStats) {
      champObj.itemStats = itemObj.stats;
    } else {
      let champItemStats = champObj.itemStats;
      for (let stat of Object.keys(itemObj.stats)) {
        let itemStatObj = itemObj.stats[stat];
        for (let type of Object.keys(itemStatObj)) {
          let val = itemStatObj[type];
          champItemStats[stat][type] += val;
        }
      }
    }

    champItemList[emptySlot] = itemObj;
    championList[champIndex] = champObj;
    this.setState({ championList })
  }


  addChampionToList = (champName, level=1) => {
    let newChampObject = this.scaleChampionByLevel(champName, level);
    let index = this.state.championList.findIndex(c => c.name == champName);
    if (index >= 0) {
      let championListCpy = [newChampObject];
      this.setState({ championList: championListCpy })
    } else {
      this.setState(st => ({ championList: [newChampObject] }))
    }
  }

  /** Gets champion base stats from the json file and returns a copy of the champion with scaled stats, based on level. */
  scaleChampionByLevel = (champName, level) => {
    let newChampObject = { ...champdata[champName] }
    let currentStats = {};
    let relevantStats = ['health', 'healthRegen', 'mana', 'manaRegen', 
    'armor', 'magicResistance', 'attackDamage', 'movespeed', 'attackSpeed', 'attackRange']
    for (let key of Object.keys(newChampObject.stats)) {
      if (relevantStats.indexOf(key) < 0) continue;
      // have to account for attackspeed being a percentage increase of 0.02 not 2 (divide by 100)
      // we don't just increase stats by flat amount, we have to do it scaled by their formula
      // for percentages, we add up percentages from items and all sources, then apply the formula based on level
      
      let base = newChampObject.stats[key].flat;
      let growth = newChampObject.stats[key].perLevel; 
      let finalFlat = base + growth * (level - 1) * (0.7025 + 0.0175 * (level - 1)); 

      let champObj = this.state.championList[0];
      if (champObj != null) {
        if (champObj.itemState != null) {
          if (champObj.itemStats[key] != null) {
            let { flat, percent, perLevel, percentPerLevel, percentBase, percentBonus } = champObj.itemStats[key];
            console.log(champObj.itemStats[key])
  
            if (key == 'attackSpeed') {
              let finalpercent = percent + finalFlat;
              // finalFlat = (base * (1 + finalpercent + 100)).toFixed(3);
            }
  
            if (key == 'healthRegen') {
              finalFlat /= 5;
            }
          }
        }
      }

      currentStats[key.toLowerCase()] = finalFlat;
    }
    currentStats.level = level;
    currentStats.lifesteal = currentStats.lifesteal ? currentStats.lifesteal : 0
    currentStats.abilitypower = currentStats.abilitypower ? currentStats.abilitypower : 0
    newChampObject.currentStats = currentStats;
    this.state.championList[0] != null ? newChampObject.items = this.state.championList[0].items : newChampObject.items = new Array(6).fill(null)
    newChampObject.itemStats = this.state.championList[0] != null ? this.state.championList[0].itemStats : null;
    
    return newChampObject;
  }

  /* Takes in a champion object, and an itemsObject and returns a championObj
  */

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
                <Stats addChampionToList={this.addChampionToList} {...c} />
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