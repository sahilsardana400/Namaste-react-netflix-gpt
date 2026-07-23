import React from 'react'

const VideoTitle = (props) => {
  const {title,overview} = props;

  return (
    <div className="w-screen aspect-video pt-80 px-12 absolute text-white bg-opacity-55 bg-gradient-to-r from-black">
        <h1 className="text-5xl font-semibold">{title}</h1>
        <p className="py-6 text-lg w-1/2">{overview}</p>
        <div className="">
            <button className="bg-white text-black p-3 w-15 px-16 text-center rounded-lg text-xl hover:bg-opacity-80">▶ Play</button>
            <button className="bg-gray-500 text-white p-3 w-17 px-16 text-center rounded-lg text-xl bg-opacity-50 mx-5 hover:bg-opacity-80">ℹ More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle