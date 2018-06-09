import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Avatar from './Avatar';
import MoreArrow from './MoreArrow';
import IssueBody from './IssueBody';

import '../styles/issue-item.scss';

const propTypes = {
    issue: PropTypes.object.isRequired,
    isOpen: PropTypes.bool.isRequired,
    open: PropTypes.func.isRequired,
    close: PropTypes.func.isRequired,
};


class IssueCard extends Component {
    render() {
        const { issue, isOpen, open, close } = this.props;
        return (
            <div className="issue-entry-container">
                <Avatar 
                    src={issue.user.avatar_url} 
                />

                <div className="issue-title"> {issue.title}</div>
                
                <MoreArrow 
                    isOpen={isOpen}
                    show={open}
                    hide={close} 
                />
            </div>
        );
    }
}


IssueCard.propTypes = propTypes;


export default IssueCard;
