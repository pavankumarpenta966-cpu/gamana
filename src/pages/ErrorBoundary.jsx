// ErrorBoundary.tsx
import React from 'react'



class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    console.error("Caught by Error Boundary:", error, info)
    // You could log this to a monitoring service here
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>
    }
    return this.props.children
  }
}

export default ErrorBoundary
