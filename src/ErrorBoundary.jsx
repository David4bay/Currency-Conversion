/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react"
import { backButton, errorContainerStyle } from "./util/styles/ErrorStyles"

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props)
      this.state = { hasError: false }
    }
  
    static getDerivedStateFromError(error) {
      return { hasError: true }
    }
  
    componentDidCatch(error, errorInfo) {
      console.log(error, errorInfo)
    }
  
    render() {

      if (this.state.hasError) {
        return (
          <div style={errorContainerStyle}>
            <h1>Unfortunately, something went wrong.</h1>
            <br/>
            <a style={backButton} href="/">Go Back</a>
          </div>
        )
      }
      return this.props.children 
    }
  }

  export default ErrorBoundary