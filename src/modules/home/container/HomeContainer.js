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
            loading: loadingNew
        }
        );

        const options = {
            headers: {
                'Authorization': 'eyJraWQiOiJMamU0NUVOSjR6N2lZZGxEdzZNazUwVVlJZW9oeTVBbzV6R1NLTUZhTEFNPSIsImFsZyI6IlJTMjU2In0.eyJhdF9oYXNoIjoiaHNVaEVLVklUSlJSLXI5S1RVQnYwUSIsInN1YiI6ImQ1MjIwZTdhLWI5ZTMtNGVjMC1iMmU4LWQ0MjFkM2QxNGM0ZCIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9VQnh6cEYzeEUiLCJwaG9uZV9udW1iZXJfdmVyaWZpZWQiOmZhbHNlLCJjb2duaXRvOnVzZXJuYW1lIjoiYWRtaW4iLCJhdWQiOiIzYWViOW1oZWFrYnVuNnRkaHBycHZiZWlvYyIsImV2ZW50X2lkIjoiMzM1MTg1NzctMzNhMy00OTQyLTkyYmEtMjk0M2Q3YzJmNGNhIiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE1NjIzNDE1NjgsInBob25lX251bWJlciI6Iis5MTk2NzcwNDI3MDciLCJleHAiOjE1NjIzNDUxNjgsImlhdCI6MTU2MjM0MTU2OCwiZW1haWwiOiJsZWFybnRlY2hwdXp6QGdtYWlsLmNvbSJ9.XJ55BIP3I16yg2pD5pluECMuq44v8NTObdPW8EJVv8dUkR477JP96isbTrHjw10Xqmi0g3KpsSSujXM2FYDrtSkmvosVvNg490IOMqX3gm2T9wuQhop7M-nGWvn0mzslJpLX7cFrd5Q9wMi8bYqkKc-ENmO5kC_IQ5jri3f9CZPcfxQGjxnRu8ZW0qhIZdrtExZm82Z0ctTTdg96fxiIrcAQ2MKuf9qa19_G19Fo5nvDsiXXLR6Wx0V1qZZn0JYDo7KCHDnhEAmoplcqkXLg-r4kxfhHuv-iGAU_56vyLDDkngnUsjh45_7HYRMPr8SNT_3AMvlEUxxcrlkE3GYyKg',
                'Content-Type': 'application/json;charset=UTF-8'
            }
        };

        var postData = {
            username: 'test1',
            name: 'test1',
            email: 'test1@mail.com',
            mobile: '1'
        }
        axios.post('/user', postData, options)
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