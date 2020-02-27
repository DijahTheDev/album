import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getAlbums } from "../actions/data"

export default props => {
  const [albums, setAlbums] = useState([])

  useEffect(() => {
    getAlbums().then(data => setAlbums(data))
  }, [])

  return (
    <div>
      <h1>My Albums</h1>
      <div className="grid">
        {albums.map(album => (
          <Link to={`/album/${album.id}`}>
            <img src={album.coverPhoto} />
            <p className="title">{album.name}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
