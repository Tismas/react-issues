import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../styles/issue-body.scss';

const propTypes = {
    body: PropTypes.string.isRequired
};


class IssueBody extends Component {
    render() {
        const { body } = this.props;
        return (
            <div className="issue-body-container">
                {body}
            </div>
        );
    }
}


IssueBody.propTypes = propTypes;


export default IssueBody;
