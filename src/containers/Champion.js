// REGULAR IMPORTS
import React from 'react';

// STYLESHEETS
import '../css/ChampionBox.css';

class Champions extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        const { children } = this.props;

        return(
            <>
                {children}
            </>
        )
    }
}

export default Champions;