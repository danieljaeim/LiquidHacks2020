// REGULAR IMPORTS
import React from 'react';

// STYLESHEETS
import '../css/Champion.css';

class Champion extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        const { children } = this.props;

        return(
            <div className="champion-container">
                <div> {this.props.name} </div>
                {children}
            </div>
        )
    }
}

export default Champion;