import React, { Component } from 'react'

class CurrentSite extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { currentSite } = this.props
    return (
      <p>current site: {currentSite}</p>
    )
  }
}

export default CurrentSite