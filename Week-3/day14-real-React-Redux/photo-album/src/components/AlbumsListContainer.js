import * as React from 'react'
import { connect } from 'react-redux'
import * as request from 'superagent'
import AlbumsList from './AlbumsList'
import { helloWorld } from '../actions/test'

class AlbumsListContainer extends React.PureComponent {
  state = {}

  componentDidMount() {
    this.props.dispatch({
        type: 'HELLO_WORLD',
        payload: {
          firstName: 'Alice',
          lastName: 'McDog'
        }
      })
    request('https://jsonplaceholder.typicode.com/albums')
      .then(response => this.setState({ albums: response.body }))
  }

  render() {
    if (!this.state.albums) return 'Loading...'
    return <AlbumsList albums={this.state.albums} />
  }
}

export default connect(null, { helloWorld: helloWorld })(AlbumsListContainer)

// const mapStateToProps = state => ({
//     albums: this.state.albums
//   });
  
//   export default connect(mapStateToProps)(AlbumsListContainer);


