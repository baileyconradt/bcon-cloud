import React from 'react';
import ListItem from "./ListItem"

function renderListItems(items, remove) {
    
    return items.map((item, index) => {
        return <ListItem key={index} item={item} remove={remove}/>
    })
} 

export default class ListContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: []
        }
        this.addItemToList = this.addItemToList.bind(this);
        this.removeItemFromList = this.removeItemFromList.bind(this);
    }

    addItemToList(){
        const newValue = document.getElementById("input-field").value;
        let newArray = JSON.parse(JSON.stringify(this.state.items));
        newArray.push(newValue);
        this.setState({items: newArray});
    }

    removeItemFromList(key){
        const newValue = document.getElementById("input-field").value;
        let newArray = JSON.parse(JSON.stringify(this.state.items));
        newArray.filter(item => item != key)
        this.setState({items: newArray});
    }

    render() {
        return <div>
            <table>
                <thead>
                    <tr>Data</tr>
                </thead>
                <tbody>
                    <input id="input-field"></input>
                    <button onClick={this.addItemToList}>Add Item</button>
                    {renderListItems(this.state.items, this.removeItemFromList)}
                </tbody>
            </table>
        </div>
    }
}