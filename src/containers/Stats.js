// REGULAR IMPORTS
import React from 'react';

// STYLESHEETS
import '../css/Stats.css';

class Stats extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {currentStats} = this.props;
        console.log(currentStats)
        return(<></>)
    }
}

export default Stats;