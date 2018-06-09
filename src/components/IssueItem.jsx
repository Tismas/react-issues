import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Avatar from './Avatar';

import '../styles/issue-item.scss';

const propTypes = {
    issue: PropTypes.object.isRequired
};


class IssueItem extends Component {
    render() {
        const { issue } = this.props;
        return (
            <div className="issue-container">
                <Avatar src={issue.user.avatar_url} />
                {issue.title}
            </div>
        );
    }
}


IssueItem.propTypes = propTypes;


export default IssueItem;
