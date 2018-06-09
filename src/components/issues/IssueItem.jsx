import React, { Component } from 'react';
import PropTypes from 'prop-types';

import IssueBody from './IssueBody';
import IssueCard from './IssueCard';

import '../../styles/issues/issue-item.scss';

const propTypes = {
    issue: PropTypes.object.isRequired
};


class IssueItem extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false
        };

        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
    }

    open() {
        this.setState({ isOpen: true });
    }

    close() {
        this.setState({ isOpen: false });
    }

    render() {
        const { issue } = this.props;
        const { isOpen } = this.state;
        return (
            <div className="issue-container">
                <IssueCard 
                    isOpen={isOpen}
                    issue={issue}
                    open={this.open}
                    close={this.close}
                />
                {isOpen ? <IssueBody body={issue.body} /> : null}
            </div>
        );
    }
}


IssueItem.propTypes = propTypes;


export default IssueItem;
