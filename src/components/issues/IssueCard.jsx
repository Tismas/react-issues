import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Avatar from '../common/Avatar';
import MoreArrow from '../common/MoreArrow';
import CardInfo from './CardInfo';

import '../../styles/issue-card.scss';

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

                <CardInfo issue={ issue } />

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
