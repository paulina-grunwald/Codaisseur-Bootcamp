import * as React from 'react'

export default function AlbumsList(props) {
    const albumsItems = props.albums.map(album => (
        <ul key={album.id}>
          <li>{album.title}</li>
        </ul>
      ));
  return (<div>
    <h1>All Albums</h1>
    There are { props.albums.length } albums available.
    <div>
      {albumsItems}
    </div>
  </div>)
}