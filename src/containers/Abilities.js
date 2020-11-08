import React from 'react';

// STYLESHEETS
import '../css/Abilities.css';

class Abilities extends React.Component {
    state = {}

    // Reads an ability's effects and parses damage, and its type 
    // Returns a number for the ability, based on its level, and the champion's base stats + item stats
    /* KNOWN TYPES OF DAMAGE:
        Physical Damage
        Magic Damage
        Minion Damage
        Additional Magic Damage
        Total Single Target Damage
        Total Mixed Damage
    */
    calculateAbilityBasedOnStats = () => {
        let { effects } = this.props.abilities;
    }

    render() {

        const { abilities, currentstats } = this.props;
        let abilityArr = Object.values(abilities).map(a => {
            return a[0]
        })

        console.log(abilityArr)

        return (
            <>
                {abilityArr.map(a => {
                    return (
                        <div key={a.name} className="tooltip">
                            <span className="tooltiptext">
                                <span className="ability-name">{ a.name }</span>
                                <span className="ability-description">{a.effects[0].description}</span>
                            </span>
                            <img className="ability-icon" src={a.icon} />
                        </div>
                    )
                })}
            </>
        )
    }
}

export default Abilities;