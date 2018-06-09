import React, { Component } from 'react';

import '../../styles/common/loader.scss';


class Loader extends Component {
    constructor() {
        super();
        this.state = {
            dotsCount: 1
        };

        this.refreshDots = this.refreshDots.bind(this);
    }
    
    componentDidMount() {
        this.animationInterval = setInterval(this.refreshDots, 500);
    }

    componentWillUnmount() {
        clearInterval(this.animationInterval);
    }

    refreshDots() {
        this.setState({ dotsCount: this.state.dotsCount % 3 + 1 });
    }

    render() {
        return (
            <div className="loader">
                Loading{'.'.repeat(this.state.dotsCount)}
            </div>
        );
    }
}

export default Loader;
