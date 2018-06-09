import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../styles/avatar.scss';

const propTypes = {
    src: PropTypes.string.isRequired
};


class Avatar extends Component {
    render() {
        return (
            <img className="avatar" src={this.props.src} />
        );
    }
}


Avatar.propTypes = propTypes;


export default Avatar;
