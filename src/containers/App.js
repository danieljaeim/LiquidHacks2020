// REGULAR IMPORTS
import React from 'react';

// STYLESHEETS
import '../css/App.css';

// STATIC INFO JSON FILES

// IMPORTING COMPONENTS
import Champion from './Champion';
import Items from './Items';
import Stats from './Stats'
import Abilities from './Abilities';
import Runes from './Runes';
import champdata from '../data/champions.json';
import itemdata from '../data/items.json';

//IMPORT CONTAINERS
import Box from '../components/Box';

class App extends React.Component {
  
  state = {
    championList: champdata,
    itemsList: itemdata
  } 
  render() {
    return (
      <>
        <Champion>
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
      </>
    )
  }
}

export default App;
