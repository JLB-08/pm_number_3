import React, {Component} from 'react';


class Dashboard extends Component{
    render(){
        return(
            <div>
               <h3>Welcome to my World {this.props.name}</h3>
            </div>
        )
    }
}

export default Dashboard;