import ReactDOM from 'react-dom'
import React from 'react'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className='container'>
                <input className='btn' type="submit" value="Alert" onClick={() => {alert("boom");}}/>
            </div>
        )
    }
}

const app = document.getElementById('app');
if(app){
    ReactDOM.render(<App/>, app)
}
