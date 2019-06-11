import React, {Component} from 'react';

class HomeContainer extends Component{

    constructor(props){
        super(props);
        this.state ={
            userName: null
        }
    }

    render(){
        return (
            <div>Home Page</div>
        );
    }
}

export default HomeContainer;