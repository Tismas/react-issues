import React, { Component } from 'react';
import PropTypes from 'prop-types';


const propTypes = {
    issue: PropTypes.object.isRequired
};


class IssueItem extends Component {
    render() {
        return (
            <div>
                {this.props.issue.title}
            </div>
        );
    }
}


IssueItem.propTypes = propTypes;


export default IssueItem;
