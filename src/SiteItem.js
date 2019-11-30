import React, { Component } from 'react'

class SiteItem extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <li onClick={this.props.handleClick} key={this.props.site}>{this.props.site}</li>
    )
  }
}

export default SiteItem