import React from 'react';
import Lilren from './lilren'

export default function(props){
  const videos = props.divorce.map((video)=>{
    return(
      <Lilren video={video} handleBobandLaura={props.handleBobandLaura} />
    )
  })
  return(
    <div>
      <ul>
        {videos}
      </ul>
    </div>
  )
}
