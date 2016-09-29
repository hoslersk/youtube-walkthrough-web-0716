import React from 'react';

export default function(props) {
  const title = props.video.snippet.title
  const thumbnail = props.video.snippet.thumbnails.default.url
  return(
    <li onClick={()=>{props.handleBobandLaura(props.video)}}>
      <img src={thumbnail} />
      <p>{title}</p>
    </li>
  )
}
