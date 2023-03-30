import React, { forwardRef, useState } from "react";
interface IVideoPlayerProps {
  src: string;
  type: string;
  width: string;
  onPlay: any;
  onPause: any;
}
const VideoPlayer = forwardRef(function VideoPlayer(
  { src, type, width, onPause, onPlay }: IVideoPlayerProps,
  ref: React.LegacyRef<HTMLVideoElement>
) {
  return (
    <video width={width} ref={ref} onPlay={onPlay} onPause={onPause}>
      <source src={src} type={type} />
    </video>
  );
});

export default VideoPlayer;
