import React, { Component } from 'react'
import SiteItem from './SiteItem'
import CurrentSite from './CurrentSite';

class Directory extends Component {
  constructor(props) {
    super(props)

    this.state = {
      campSiteState: this.props.campsites,
      currentSite: ''
    }
  }

  render() {
    const { campSiteState } = this.state
    return (
      <div>
      <ul>
        {campSiteState.map(site => {
          return <SiteItem handleClick={() => this.setState({currentSite: site})} site={site}/>
        })}
      </ul>
      <CurrentSite currentSite={this.state.currentSite} />
      </div>
    )
  }
}

export default Directory