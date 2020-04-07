import React, {Component, Fragment} from 'react';
import {ErrorIndicator} from '../error-indicator';

export class ErrorBoundary extends Component {
    state = {
        hasError: false
    };

    componentDidCatch(error, info) {
        this.setState({hasError: true});
    }

    render() {
        return (
            <Fragment>
                {
                    this.state.hasError
                        ? <ErrorIndicator />
                        : this.props.children
                }
            </Fragment>
        )
    }
}
