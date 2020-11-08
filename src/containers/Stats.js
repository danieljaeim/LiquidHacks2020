// REGULAR IMPORTS
import React, { useEffect } from 'react';
import { Dropdown, Transition } from 'semantic-ui-react';

// STYLESHEETS
import '../css/Stats.css';

class Stats extends React.Component {
    state = {
        levelOptions: null,
        currentLevel: 1
    }
    
    images = ["https://i.imgur.com/phYfxhw.png", "https://i.imgur.com/VwNC3Gx.png", "https://i.imgur.com/jbm413s.png"
        ,"https://i.imgur.com/1a2gqd6.png", "https://i.imgur.com/HpHBuzr.png", "https://i.imgur.com/YGLWVBm.png", "https://i.imgur.com/O6G2qo5.png", "https://i.imgur.com/rC7N7BE.png",
        "https://i.imgur.com/BICPlMn.png", "https://i.imgur.com/4unvtif.png"];
    
    componentDidMount = () => {
        this.setState({levelOptions: this.levels()})
        console.log(calc)
    }

    componentDidUpdate() {
        console.log(this.state);
    }

    levels = () => {
        var arr = []
        for (var level = 1; level <= 18; level++) {
            arr.push({key: level, value: level, text: "Level: " + level})
        } 
        return arr;
    }
    
    handleDropdownChange = (event, data) => {
        this.setState({currentLevel: data.value})
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
        const { levelOptions } = this.state;
        return (
            <>
            <Dropdown
                placeholder='Level 1'
                onChange={this.handleDropdownChange}
                fluid
                search
                selection
                options={levelOptions}
            />
                <div className="role" >
                    Roles: {this.getRoles()}
                </div>
                <div className="level-stat" >
                    Level: {this.props.currentStats.level} 
                </div>
                {Object.keys(this.props.currentStats).map((stat, index) => {
                    if (stat === 'level') return;
                    return (
                    <div className={`${stat} stat`} >
                        <img src={this.images[index]} width="15px" height="15px" style={{textDecoration: 'capitalize'}}/>
                            {stat}: {this.props.currentStats[stat]}
                    </div>
                    )
                })}
            </>
        )
    }
}

export default Stats;