import React, { useEffect, useState } from "react"

export default props => {
  return
  import React, { useEffect, useState } from "react"
  import { Link } from "react-router-dom"
  import { getAlbum, getAlbums } from "../actions/data"

  export default props => {
    const [album, setAlbum] = useState({})
    const [photos, setPhotos] = useState([])
    const [albums, setAlbums] = useState([])

    useEffect(() => {
      getAlbum(props.match.params.id).then(data => {
        setAlbum(data)
        setPhotos(data.photos)
      })
      getAlbums().then(data => setAlbums(data))
    }, [props.match.params])

    return (
      <div>
        <h1>{album.name}</h1>
        <div className="albums">
          {albums.map(album => (
            <p key to={"album-picture-link-" + album.id}>
              <Link to={`/album/${album.id}`}>{album.name}</Link>
            </p>
          ))}
        </div>
        <div className="grid">
          {pictures.map(picture => (
            <Link to={`/photo/${photo.id}`}>
              <img src={picture.url} />
              <p className="title">{photo.name}</p>
            </Link>
          ))}
        </div>
      </div>
    )
  }
}
