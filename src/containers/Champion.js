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
                <div className="champ-header">
                    <span className="champ-portrait"></span>
                    <span className="champ-name"> {this.props.name} </span>
                </div>
                {children}
            </div>
        )
    }
}

export default Champion;