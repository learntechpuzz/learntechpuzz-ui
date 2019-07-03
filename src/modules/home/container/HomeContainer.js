import React, { Component } from 'react';
import Courses from './../components/Courses'
import axios from './../../common/axios/axios-api'
import withErrorHandler from './../../common/withErrorHandler/withErrorHandler'

class HomeContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: null,
            loading: []
        }
    }

    enrollHandler = (id) => {
        let loadingNew = this.state.loading.slice();
        loadingNew.push(id)
        this.setState({
            loading: loadingNew}
            );
        const formData = {};
        axios.post('/enroll', formData)
            .then(response => {
                let loadingNew = this.state.loading;
                this.setState({
                    loading: loadingNew.filter(item => item !== id)
                });
                console.log(response);
    
        })
        .catch(error => {
            let loadingNew = this.state.loading;
            this.setState({
                loading: loadingNew.filter(item => item !== id)
            });
            console.log(error);
        });    
    }
    render() {
        return (
            <Courses enrollHandler={(id) => this.enrollHandler(id)} loading={this.state.loading} />
        );
    }
}

export default withErrorHandler(HomeContainer, axios);