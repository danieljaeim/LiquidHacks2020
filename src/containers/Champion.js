// REGULAR IMPORTS
import React from 'react';

// STYLESHEETS
import '../css/ChampionBox.css';

class Champion extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        const { children } = this.props;

        return(
            <div className="champion-container">
                {children}
            </div>
        )
    }
}

export default Champion;