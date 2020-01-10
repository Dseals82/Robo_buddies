import React, { Component } from 'react';

// works for apps thats in production only, in development mode will not work

class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    }
  }

  componentDidCatch(error, info){
    this.setState({hasError: true})
  }

  render(){
    if (this.state.hasError) {
      return <h1>OOps, there is an error!</h1>
    }
    return this.props.children
  }
}

export default ErrorBoundry;
