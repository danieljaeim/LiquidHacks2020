import React from 'react';
import '../css/Searchbar.css';
import { Dropdown } from 'semantic-ui-react';

class Searchbar extends React.Component {

    state = {
        championOptions: null
    }

    componentDidMount = () => {
        this.setState({ championOptions: this.generateListOfChampNames() })
    }

    searchTextOnChange = e => {
        this.setState({
            searchText: e.target.value
        })
    }

    returnListOfIcons = () => {
        const { champdata } = this.props;

        let retArr = [];
        for (let key of Object.keys(champdata)) {
            let obj = { key, icon: champdata[key].icon }
            retArr.push(obj);
        }
        return retArr;
    }

    /* RETURNS A LIST OF CHAMPION NAMES FOR THE SEARCHBAR */
    generateListOfChampNames = () => {
        let { champdata } = this.props;
        let arr = Object.keys(champdata).map(key => {
            return { key: key, value: key, image: {src: champdata[key].icon}, text: key }
        })

        return arr;
    }

    handleDropdownChange = (event, data) => {
        this.props.addChampionToList(data.value)
    }

    render() {
        const { addChampionToList, generateListOfChampNames } = this.props;
        const { championOptions } = this.state;

        return (
            <>
                {/* change this for a working searchbar later */}
                <div className="champions-modal">
                    <Dropdown
                        placeholder='Select Champion'
                        onChange={this.handleDropdownChange}
                        fluid
                        search
                        selection
                        options={championOptions}
                    />
                </div>
            </>
        );
    }
}

export default Searchbar;
