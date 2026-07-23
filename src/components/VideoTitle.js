import React from 'react'

const VideoTitle = (props) => {
  const {title,overview} = props;

  return (
    <div className="absolute w-full aspect-video px-12 pt-80 text-white bg-gradient-to-r from-black">
        <h1 className="text-2xl font-semibold text-justify italic">{title}</h1>
        <p className="py-6 text-lg w-1/2 text-justify">{overview}</p>
        <div className="">
            <button className="bg-white text-black p-3 w-15 px-16 text-center rounded-lg text-xl hover:bg-opacity-80">▶ Play</button>
            <button className="bg-gray-500 text-white p-3 w-17 px-16 text-center rounded-lg text-xl bg-opacity-50 mx-5 hover:bg-opacity-80">ℹ More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle