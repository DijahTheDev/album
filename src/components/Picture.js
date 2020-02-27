import React, { useEffect, useState } from "react"
import { getPicture, getLinks } from "../actions/data"
import { Link } from "react-router-dom"

export default props => {
  const [photo, setPhoto] = useState({})
  const [leftLink, setLink] = useState("")
  const [rightlink] = useState("")

  useEffect(() => {
    getPicture(props.match.params.id).then(data => {
      setPhoto(data)
    })

    getLink(props.match.params.id).then(link => {
      setLeft(links.left)
      setRight(links.right)
    })
  }, [props.match.params.id])

  return (
    <div className="photo">
      <h1>{photo.name}</h1>
      <Link to={`/picture/${leftLink}`}>$laquo;</Link>
      <img src={photo.url} />
      <Link to={`/picture/${rightLink}`}>$raquo;</Link>
    </div>
  )
}
