import { useVideoTexture } from "@react-three/drei";
import { useCallback, useState } from "react";

const Video = (props) => {
  const texture = useVideoTexture("/videos/video_water.mp4", {
    muted: true,
    loop: true,
    start: true,
  });

  const [pause, setPause] = useState(false);

  const handleVideo = useCallback(
    (e) => {
      e.stopPropagation();
      pause ? texture.image.play() : texture.image.pause();
      setPause(!pause);
    },
    [pause, setPause, texture]
  );

  return (
    <mesh {...props} onClick={handleVideo}>
      <planeGeometry args={[2, 1]} />
      <meshBasicMaterial map={texture} toneMapped={false} />
    </mesh>
  );
};

export default Video;
