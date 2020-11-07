import React from 'react';
import '../css/Searchbar.css';

class Searchbar extends React.Component {

    state = {
        searchText: '',
        iconArr: []
    }

    componentDidMount = () => {
        this.setState({ iconArr: this.returnListOfIcons() })
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

    render() {
        const { addChampionToList, champdata } = this.props;
        const { iconArr } = this.state;

        return (
            <>
                {/* change this for a working searchbar later */}
                <div className="champions-modal">
                    {iconArr.map(obj => {
                        return (
                            <img onClick={_ => addChampionToList(obj.key)} key={obj.key} className="champ-icon" src={obj.icon} />
                        )
                    })}
                </div>
                <div className="searchbar-container">
                    <input className="searchbar"
                        placeholder="champion"
                        onChange={e => this.searchTextOnChange(e)} />
                </div>
            </>
        );
    }
}

export default Searchbar;
