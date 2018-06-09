import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Avatar from './Avatar';
import MoreArrow from './MoreArrow';
import IssueBody from './IssueBody';

import '../styles/issue-item.scss';

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
        return (
            <div className="issue-container">
                <div className="issue-entry-container">
                    <Avatar 
                        src={issue.user.avatar_url} 
                    />

                    <div className="issue-title"> {issue.title}</div>
                    
                    <MoreArrow 
                        isOpen={this.state.isOpen}
                        show={this.open}
                        hide={this.close} 
                    />
                </div>
                {this.state.isOpen ? <IssueBody body={issue.body} /> : null}
            </div>
        );
    }
}


IssueItem.propTypes = propTypes;


export default IssueItem;
