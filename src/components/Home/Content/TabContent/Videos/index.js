import React from 'react'

const Videos = () => {
  return (
    <div>
      <iframe
        width="880"
        height="420"
        src={`https://www.youtube.com/embed/PTEIXgd3qcQ`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  )
}

export default Videos
