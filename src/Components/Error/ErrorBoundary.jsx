import React from "react"
import ErrorPage from "./ErrorPage";



class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false,
            error: ''
        }
    }

    static getDerivedStateFromError(gotError) {
        return { hasError: true, error: gotError };
    }

    render() {
        if (this.state.hasError) {
            return <ErrorPage error={this.state.error} />
        }
        return this.props.children;
    }

}


export default ErrorBoundary;