import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../styles/more-arrow.scss';

const propTypes = {
    show: PropTypes.func.isRequired,
    hide: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired
};


class MoreArrow extends Component {
    render() {
        return (
            <div 
                className="arrow-container"
                onClick={this.props.isOpen ? 
                    this.props.hide
                    : 
                    this.props.show
                }
            >
                <div 
                    className={`arrow ${this.props.isOpen ? 
                        'arrow-up' :'arrow-down'
                    }`} 
                />
            </div>
        );
    }
}


MoreArrow.propTypes = propTypes;


export default MoreArrow;
