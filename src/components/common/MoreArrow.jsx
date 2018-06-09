import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../../styles/more-arrow.scss';

const propTypes = {
    show: PropTypes.func.isRequired,
    hide: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired
};


class MoreArrow extends Component {
    render() {
        const { hide, show, isOpen } = this.props;
        return (
            <div
                className="arrow-container"
                onClick={isOpen ? hide : show}
            >
                <div
                    className={`arrow ${isOpen ? 'arrow-up' : 'arrow-down'}`}
                />
            </div>
        );
    }
}


MoreArrow.propTypes = propTypes;


export default MoreArrow;
