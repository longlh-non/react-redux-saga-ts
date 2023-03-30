import React, { useRef, useState } from "react";
import VideoPlayer from "../components/VideoPlayer";
import ImageCarousel from "../components/ImageCarousel";
import StopWatch from "../components/StopWatch";

export default function UseRef() {
  const [isPlaying, setIsPlaying] = useState(false);
  const ref = useRef<HTMLVideoElement>(null);

  const handleClick = function (event: React.MouseEvent<HTMLButtonElement>) {
    if (!ref.current) return;
    const nextIsPlaying = !isPlaying;
    setIsPlaying(nextIsPlaying);
    if (nextIsPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  };
  return (
    <div>
      <StopWatch />
      <br />
      <br />
      <br />
      <VideoPlayer
        ref={ref}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
        type="video/mp4"
        width="250"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
      <br />
      <button onClick={handleClick}>{isPlaying ? "Pause" : "Play"}</button>
      <br />
      <br />
      <br />
      <ImageCarousel />
    </div>
  );
}
