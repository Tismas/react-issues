import React, { Component } from 'react';
import PropTypes from 'prop-types';

import IssueItem from './IssueItem';

import '../styles/issues-list.scss';

const propTypes = {
    issues: PropTypes.array.isRequired
};


class IssuesList extends Component {
    render() {
        return (
            <div>
                {this.props.issues.map((e,i) => 
                    <IssueItem key={i} issue={e} />
                )}
            </div>
        );
    }
}


IssuesList.propTypes = propTypes;


export default IssuesList;
