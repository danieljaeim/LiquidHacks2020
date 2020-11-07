// REGULAR IMPORTS
import React, { Children } from 'react';

// STYLESHEETS
import '../css/Champion.css';

class Box extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {className, children} = this.props;

        return(
            <div className={className + ' box'}>
                {children}
            </div>
        )

    }
}

export default Box;