import React, {Component, Fragment} from 'react'
import Button from './Button';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <Fragment>
                <Button>Click ME!</Button>
                <Button>Click ME!</Button>
                <Button>Click ME!</Button>
            </Fragment>
        );
    }
}

export default App;