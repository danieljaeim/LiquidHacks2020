import React from 'react';

// STYLESHEETS
import '../css/Abilities.css';

class Abilities extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        const { abilities, currentstats } = this.props;
        let abilityArr = Object.values(abilities).map(a => {
            return a[0]
        })

        return (
            <>
                {abilityArr.map(a => {
                    return (
                        <div className="tooltip">
                            <span className="tooltiptext">
                                <span className="ability-name">{ a.name }</span>
                                <span className="ability-description"> {a.blurb} </span>
                            </span>
                            <img key={a} className="ability-icon" src={a.icon} />
                        </div>
                    )
                })}
            </>
        )
    }
}

export default Abilities;