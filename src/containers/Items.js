// REGULAR IMPORTS
import React from 'react';
import { Dropdown } from 'semantic-ui-react';

// STYLESHEETS
import '../css/Items.css';

class Items extends React.Component {
    state = { showItems: false }

    handleDropdownChange = (event, data) => {
        this.props.addItemToChampion(data.value)
    }

    generateListOfItemNames = () => {
        let { itemdata } = this.props;
        let arr = Object.keys(itemdata).map(key => {
            return { key: key, value: itemdata[key].name, image: { src: itemdata[key].icon }, text: itemdata[key].name }
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
                {items.map(i => {
                    return (
                        <span className="itemslot"
                            onClick={_ => console.log('adding item')}>
                            {i ? <img src={i.icon}></img> :
                                <span className="add-item-option">
                                    <div style={{ textAlign: 'center' }}> Add Item </div>
                                </span>
                            }
                        </span>
                    )
                })}
            </>
        )
    }
}

export default Items;