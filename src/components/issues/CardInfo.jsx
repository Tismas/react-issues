import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Octicon from 'react-octicon';

import '../../styles/issues/issue-card-info.scss';

const propTypes = {
    issue: PropTypes.object.isRequired,
};


class CardInfo extends Component {
    constructor() {
        super();
        
        this.colors = {
            'open': 'green',
            'closed': 'red'
        };
    }

    render() {
        const { issue } = this.props;
        return (
            <div className="issue-info">
                <div className="issue-status">
                    <div 
                        className="status-circle"
                        style={{'background': this.colors[issue.state]}}
                    /> 
                    { issue.state } 
                </div>
                <div className="issue-title"> { issue.title }</div>
                <Octicon name={issue.state == 'open' ? 'issue-opened' : 'issue-closed'} />
                <a className="issue-link" href={issue['html_url']}> Issue link </a>
            </div>
        );
    }
}


CardInfo.propTypes = propTypes;


export default CardInfo;
