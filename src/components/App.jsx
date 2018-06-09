import React, { Component } from 'react';
import axios from 'axios';

import Header from './Header';
import IssuesList from './issues/IssuesList';
import Loader from './common/Loader';

import '../styles/app.scss';


class App extends Component {
    constructor() {
        super();
        this.state = {
            issues: [],
            fetching: true,
            page: 1
        }

        this.since = new Date();
        this.since.setDate(this.since.getDate() - 7);

        this.loadMore = this.loadMore.bind(this);
    }

    componentDidMount() {
        this.loadMore();
    }

    parseResults(response) {
        if(response.data) {
            this.setState({ 
                issues: this.state.issues.concat(response.data),
                fetching: false,
                page: this.state.page + 1
            });
        }
    }

    loadMore() {
        this.setState({ fetching: true });
        axios.get('https://api.github.com/repos/facebook/react/issues', {
            params: {
                since: this.since,
                sort: 'updated',
                state: 'all',
                page: this.state.page,
                perPage: 30
            }
        }).then(this.parseResults.bind(this));
    }

    render() {
        return (
            <div>
                <Header />
                {this.state.issues.length ? 
                    <IssuesList 
                        loadMore={this.loadMore} 
                        issues={this.state.issues} 
                        fetching={this.state.fetching}
                    />
                    :
                    <Loader />
                }
            </div>
        );
    }
}

export default App;
