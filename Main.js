import React from 'react';
import Reactdom from 'react-dom';
import ListContainer from './Components/ListContainer';

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            test: 'hello'
        }

        this.updateTestValue = this.updateTestValue.bind(this);
    }

    updateTestValue(e) {
        this.setState({
            test: e.target.value
        });
    }

    render() {
        return <div>
            <ListContainer testValue={this.state.test} />
            
        </div>
    }
}

const wrapper = document.getElementById('root');
wrapper ? Reactdom.render(<Main />, wrapper) : false;