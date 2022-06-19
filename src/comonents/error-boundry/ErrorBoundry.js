import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    // componentDidCatch(error, errorInfo) {
    //   // You can also log the error to an error reporting service
    //   logErrorToMyService(error, errorInfo);
    // }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        this.setState({ hasError: true })
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <div style={{
                width:'250px',
                height: '50px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
               
                background: 'red'
            }}>
            <h5 style={{color:"#fff"}}>Something went wrong.</h5> 
            </div>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary