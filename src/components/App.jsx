import React, { Component } from 'react';
import axios from 'axios';

import Header from './Header';
import IssuesList from './IssuesList';
import Loader from './Loader';

import '../styles/app.scss';


class App extends Component {
    constructor() {
        super();
        this.state = {
            issues: []
        }
    }

    parseResults(response) {
        if(response.data) {
            this.setState({ issues: response.data });
        }
    }

    componentDidMount() {
        let weekAgo = new Date();
        weekAgo.setDate(weekAgo.getDate() - 7);
        axios.get('https://api.github.com/repos/facebook/react/issues', {
            params: {
                since: weekAgo.toISOString(),
                sort: 'updated',
                state: 'all'
            }
        }).then(this.parseResults.bind(this));
    }

    render() {
        return (
            <div>
                <Header />
                {this.state.issues.length ? 
                    <IssuesList issues={this.state.issues} />
                    :
                    <Loader />
                }
            </div>
        );
    }
}

export default App;
