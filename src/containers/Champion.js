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
                    <img className="champ-portrait" src={this.props.icon}></img>
                    <span className="champ-name"> {this.props.name} </span>
                </div>
                {children}
            </div>
        )
    }
}

export default Champion;