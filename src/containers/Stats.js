// REGULAR IMPORTS
import React from 'react';

// STYLESHEETS
import '../css/Stats.css';

class Stats extends React.Component {
    state = {
        currentStats: {...this.props.stats}
    }   

    getRoles() {
    var roles = this.props.roles.join(" ").toLowerCase().split(" ");
    var newroles = [];
    for (var role in roles) {
        newroles.push((roles[role].charAt(0).toUpperCase() + roles[role].slice(1)))
    }
    return newroles.join(" ");
    }

    render() {
        return(
        <>
        <h2 className="header" >Stats</h2>
        <div className="Roles" >
            Roles: { this.getRoles() }
        </div>
        <div className="Health" >
            <img src="https://i.imgur.com/phYfxhw.png" width="15px" height="15px" />
            Health: {this.state.currentStats.health.flat}
        </div>
        <div className="HealthRegen" >
            <img src="https://i.imgur.com/VwNC3Gx.png" width="15px" height="15px" />
            Health Regen: {this.state.currentStats.healthRegen.flat} 
        </div>
        <div className="Mana" >
            <img src="https://i.imgur.com/jbm413s.png" width="15px" height="15px" />
            Mana: {this.state.currentStats.mana.flat}
        </div>
        <div className="ManaRegen" >
            <img src="https://i.imgur.com/1a2gqd6.png" width="15px" height="15px" />
            Mana Regen: {this.state.currentStats.manaRegen.flat}
        </div>
        <div className="Armor" >
            <img src="https://i.imgur.com/HpHBuzr.png" width="15px" height="15px" />
            Armor: {this.state.currentStats.armor.flat}
        </div>
        <div className="MagicResistance" >
            <img src="https://i.imgur.com/YGLWVBm.png" width="15px" height="15px" />
            Magic Resistance: {this.state.currentStats.magicResistance.flat}
        </div>
        <div className="Move Speed" >
            <img src="https://i.imgur.com/rC7N7BE.png" width="15px" height="15px" />
            Move Speed: {this.state.currentStats.movespeed.flat}
        </div>
        <div className="Attack" >
            <img src="https://i.imgur.com/O6G2qo5.png" width="15px" height="15px" />
            Attack: {this.state.currentStats.attackDamage.flat + " (" + this.state.currentStats.attackSpeed.flat + " Attack speed)"}
        </div>
        <div className="AttackRange" >
            <img src="https://i.imgur.com/4unvtif.png" width="15px" height="15px" />
            Range: {this.state.currentStats.attackRange.flat}
        </div>
        <div className="CriticalStrike" >
            <img src="https://i.imgur.com/BICPlMn.png" width="15px" height="15px" />
            Critical Strike: {this.state.currentStats.criticalStrikeDamage.flat}
        </div>
        </>
        )
    }
}

export default Stats;