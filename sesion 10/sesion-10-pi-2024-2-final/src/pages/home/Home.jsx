import { Canvas } from "@react-three/fiber";
import Controls from "./controls/Controls";
import Lights from "./lights/Lights";
import { Physics } from "@react-three/rapier";
import Beach from "./world/Beach";
import Staging from "./staging/Staging";
import { Loader, PositionalAudio } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { Suspense, useCallback, useRef } from "react";
import Video from "./world/Video";
import PostProcessing from "./postprocessing/PostProcessing";

const Home = () => {
  const cameraSettings = {
    position: [0, 15, 15],
  };

  const audioRef = useRef();

  const handleAudio = useCallback(() => {
    audioRef.current.play();
    audioRef.current.setVolume(10);
  }, []);

  return (
    <>
      <Canvas camera={cameraSettings} onClick={handleAudio}>
        <Suspense fallback={null}>
          <PostProcessing />
          <Perf position={"top-left"} />
          <Controls />
          <Lights />
          <Staging />
          <Physics debug={false}>
            <Beach />
          </Physics>
          <Video name="screen" position-y={10} scale={8}  />
          <group position={[0, 5, 0]}>
            <PositionalAudio ref={audioRef} loop url="/sounds/waves.mp3" distance={5} />
          </group>
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
};

export default Home;
