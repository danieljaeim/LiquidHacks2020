// REGULAR IMPORTS
import React from 'react';

// STYLESHEETS
import '../css/Stats.css';

const statToIcon = {
    attackdamage: 'https://i.imgur.com/O6G2qo5.png',
    health: 'https://i.imgur.com/phYfxhw.png',
    attackdamage: 'https://i.imgur.com/O6G2qo5.png',
    attackdamage: 'https://i.imgur.com/O6G2qo5.png',
    attackdamage: 'https://i.imgur.com/O6G2qo5.png',
    attackdamage: 'https://i.imgur.com/O6G2qo5.png',
    attackdamage: 'https://i.imgur.com/O6G2qo5.png',
    attackdamage: 'https://i.imgur.com/O6G2qo5.png',
    attackdamage: 'https://i.imgur.com/O6G2qo5.png',
    attackdamage: 'https://i.imgur.com/O6G2qo5.png',
}

class Stats extends React.Component {

    getRoles() {
        var roles = this.props.roles.join(" ").toLowerCase().split(" ");
        var newroles = [];
        for (var role in roles) {
            newroles.push((roles[role].charAt(0).toUpperCase() + roles[role].slice(1)))
        }
        return newroles.join(" ");
    }

    render() {

        return (
            <>
                <div className="role" >
                    Roles: {this.getRoles()} 
                </div>
                <div className="level-stat" >
                    Level: {this.props.currentStats.level} 
                </div>
                {Object.keys(this.props.currentStats).map(stat => {
                    if (stat === 'level') return;
                    return (
                    <div className={`${stat} stat`} >
                        <img src="https://i.imgur.com/O6G2qo5.png" width="15px" height="15px" style={{textDecoration: 'capitalize'}}/>
                            {stat}: {this.props.currentStats[stat]}
                    </div>
                    )
                })}

                {/* <div className="Attack stat" >
                    <img src="https://i.imgur.com/O6G2qo5.png" width="15px" height="15px" />
            Physical Damage: {this.state.currentStats.attackDamage.flat}
                </div>
                <div className="Health stat" >
                    <img src="https://i.imgur.com/phYfxhw.png" width="15px" height="15px" />
            Health: {this.state.currentStats.health.flat}
                </div>
                <div className="HealthRegen stat" >
                    <img src="https://i.imgur.com/VwNC3Gx.png" width="15px" height="15px" />
            Health Regen: {this.state.currentStats.healthRegen.flat}
                </div>
                <div className="Mana stat" >
                    <img src="https://i.imgur.com/jbm413s.png" width="15px" height="15px" />
            Mana: {this.state.currentStats.mana.flat}
                </div>
                <div className="ManaRegen stat" >
                    <img src="https://i.imgur.com/1a2gqd6.png" width="15px" height="15px" />
            Mana Regen: {this.state.currentStats.manaRegen.flat}
                </div>
                <div className="Armor stat" >
                    <img src="https://i.imgur.com/HpHBuzr.png" width="15px" height="15px" />
            Armor: {this.state.currentStats.armor.flat}
                </div>
                <div className="MagicResistance stat" >
                    <img src="https://i.imgur.com/YGLWVBm.png" width="15px" height="15px" />
            Magic Resistance: {this.state.currentStats.magicResistance.flat}
                </div>
                <div className="Move Speed stat" >
                    <img src="https://i.imgur.com/rC7N7BE.png" width="15px" height="15px" />
            Move Speed: {this.state.currentStats.movespeed.flat}
                </div>
                <div className="AttackRange stat" >
                    <img src="https://i.imgur.com/4unvtif.png" width="15px" height="15px" />
            Range: {this.state.currentStats.attackRange.flat}
                </div> */}
                {/* <div className="CriticalStrike stat" >
                    <img src="https://i.imgur.com/BICPlMn.png" width="15px" height="15px" />
            Critical Strike: {this.state.currentStats.criticalStrikeDamage.flat}
                </div> */}
            </>
        )
    }
}

export default Stats;