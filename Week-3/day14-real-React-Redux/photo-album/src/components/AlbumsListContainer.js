import * as React from 'react'
import { connect } from 'react-redux'
import * as request from 'superagent'
import AlbumsList from './AlbumsList'

export default class AlbumsListContainer extends React.PureComponent {
  state = {}

  componentDidMount() {
    request('https://jsonplaceholder.typicode.com/albums')
      .then(response => this.setState({ albums: response.body }))
  }

  render() {
    if (!this.state.albums) return 'Loading...'
    return <AlbumsList albums={this.state.albums} />
  }
}

// const mapStateToProps = state => ({
//     albums: this.state.albums
//   });
  
//   export default connect(mapStateToProps)(AlbumsListContainer);


