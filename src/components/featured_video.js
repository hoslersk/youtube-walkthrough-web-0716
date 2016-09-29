import React from 'react';

export default function(props){
  if (!props.selectedVideo) {
    return <div>Search Something Better...</div>
  }
  const url = `https://www.youtube.com/embed/${props.selectedVideo.id.videoId}?autoplay=1`
  return(
    <div>
      <iframe src={url}></iframe>
    </div>
  )
}
