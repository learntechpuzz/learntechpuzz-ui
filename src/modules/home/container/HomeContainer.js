import React, {Component} from 'react';
import Courses from './../components/Courses'
class HomeContainer extends Component{

    constructor(props){
        super(props);
        this.state ={
            userName: null
        }
    }

    render(){
        return (
            <Courses />
        );
    }
}

export default HomeContainer;