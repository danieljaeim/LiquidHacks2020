// REGULAR IMPORTS
import React from 'react';

// STYLESHEETS
import '../css/Items.css';

class Items extends React.Component {
    state = { showItems: false }

    render() {

        const { items } = this.props;
        const { showItems } = this.state;
        return (

            <>
                {items.map(i => {
                    return (
                        <span className="itemslot"
                              onClick={_ => console.log('adding item')}>
                            {i ? <img src={i.icon}></img> : 
                                <span className="add-item-option">
                                    <div style={{textAlign: 'center'}}> Add Item </div>
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