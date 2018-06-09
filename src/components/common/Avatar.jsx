import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../../styles/common/avatar.scss';

const propTypes = {
    src: PropTypes.string.isRequired
};


class Avatar extends Component {
    render() {
        const { src } = this.props;
        return (
            <img className="avatar" src={this.props.src} />
        );
    }
}


Avatar.propTypes = propTypes;


export default Avatar;
