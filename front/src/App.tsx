import React, { useEffect, useRef, useState } from "react"
import "./App.css"

function App() {
  const [stream, setStream] = useState()
  const myVideo = useRef<HTMLVideoElement>(null!);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({video: true, audio: true }).then((stream: any) => {
      setStream(stream)
      myVideo.current.srcObject = stream
    })
  }, [])
  return (
    <>
      <h1>Video Chat </h1>
      <div className="container">
        <div className="videoContainer">
          <div className="video">
           {stream && <video playsInline muted ref={myVideo} autoPlay style={{ width: "300px" }}/>}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
