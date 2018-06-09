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
            issues: [
                {title: 'React is not working', body:"hi guys", user: {avatar_url: 'http://i.pravatar.cc/300?img=1'} },
                {title: 'React is so great', body:"hi guys", user: {avatar_url: 'http://i.pravatar.cc/300?img=2'} },
                {title: 'PropTypes issue', body:"hi guys", user: {avatar_url: 'http://i.pravatar.cc/300?img=3'} },
                {title: 'Problem with react', body:"hi guys", user: {avatar_url: 'http://i.pravatar.cc/300?img=4'} },
                {title: 'How can I make it go?', body:"hi guys", user: {avatar_url: 'http://i.pravatar.cc/300?img=5'} }
            ]
        }
    }

    parseResults(response) {
        console.log(response);
        if(response.data) {
            this.setState({ issues: response.data });
        }
    }

    componentDidMount() {
        // let weekAgo = new Date();
        // weekAgo.setDate(weekAgo.getDate() - 7);
        // axios.get('https://api.github.com/repos/facebook/react/issues', {
        //     params: {
        //         since: weekAgo.toISOString(),
        //         sort: 'updated',
        //         state: 'all'
        //     }
        // }).then(this.parseResults.bind(this));
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
