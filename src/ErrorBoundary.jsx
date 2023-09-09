/* eslint-disable react/prop-types */
import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            error: "",
            errorInfo: ""
        }
    }

    static getDerivedStateFromError(error) {
        console.log(error);
        return {hasError: true}
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
        this.setState({
            error: error,
            errorInfo: errorInfo,
        })
    }
    render() {
        if (this.state.error || this.state.hasError) {
            return (
                <div>
                    <p>Error: {this.state.error} occured.</p>
                    <p>Error Info: {this.state.errorInfo} occured.</p>
                </div>
            )
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary;