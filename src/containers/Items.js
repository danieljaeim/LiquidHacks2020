// REGULAR IMPORTS
import React from 'react';
import { Dropdown } from 'semantic-ui-react';

// STYLESHEETS
import '../css/Items.css';

class Items extends React.Component {
    state = { totalCost: 0 }

    handleDropdownChange = (event, data) => {
        this.props.addItemToChampion(this.props.name, data.value)
    }

    generateListOfItemNames = () => {
        let { itemdata } = this.props;
        let arr = Object.keys(itemdata).map(key => {
            return { key: key, value: key, image: { src: itemdata[key].icon }, text: itemdata[key].name }
        })
        return arr;
    }

    render() {

        const { items, name } = this.props;
        const itemOptions = this.generateListOfItemNames();

        return (
            <>
                <div className='dropdown-items'>
                    <Dropdown
                        placeholder='Select Items'
                        onChange={this.handleDropdownChange}
                        fluid
                        search
                        selection
                        options={itemOptions}
                    />
                </div>
                {items.map((i, ind) => {
                    return (
                        <span key={ind} className="itemslot" onClick={_ => console.log('adding item')}>
                            <span className="add-item-option">
                                {i ? 
                                    <div className="item-active">
                                        <img className="item-icon" src={i.icon}/>
                                    </div> 
                                    : 
                                    <div className="item-deactive"> ITEM HERE </div>
                                }
                            </span>
                        </span>
                    )
                })}
            </>
        )
    }
}

export default Items;