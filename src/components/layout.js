import React from 'react'
import './base.css'
import Container from './container'
import Navigation from './navigation'
import Footer from './footer'

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <body>
      <Navigation />
        {children}
        <Footer/>
      </body>
    )
  }
}

export default Template
