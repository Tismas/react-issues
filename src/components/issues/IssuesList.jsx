import React, { Component } from 'react';
import PropTypes from 'prop-types';

import IssueItem from './IssueItem';

import '../../styles/issues/issues-list.scss';

const propTypes = {
    issues: PropTypes.array.isRequired,
    loadMore: PropTypes.func.isRequired,
    fetching: PropTypes.bool.isRequired
};


class IssuesList extends Component {
    constructor() {
        super();
        this.loadMore = this.loadMore.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.loadMore);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.loadMore);
    }

    loadMore(e) {
        if(this.props.fetching) return;

        if(document.body.scrollHeight - window.scrollY - window.innerHeight < 400)
            this.props.loadMore();
    }

    render() {
        return (
            <div className="issues-list">
                {this.props.issues.map((e,i) => 
                    <IssueItem key={i} issue={e} />
                )}
            </div>
        );
    }
}


IssuesList.propTypes = propTypes;


export default IssuesList;
