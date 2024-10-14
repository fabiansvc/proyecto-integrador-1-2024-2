import { Canvas } from "@react-three/fiber";
import Controls from "./controls/Controls";
import Lights from "./lights/Lights";
import { Physics } from "@react-three/rapier";
import Beach from "./world/Beach";
import Staging from "./staging/Staging";
import { Loader } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { Suspense } from "react";

const Home = () => {
  const cameraSettings = {
    position: [0, 15, 15]
  };

  return (
    <>
      <Canvas camera={cameraSettings}>
        <Suspense fallback={null}>
          <Perf position={"top-left"} />
          <Controls />
          <Lights />
          <Staging />
          <Physics debug={false}>
            <Beach />
          </Physics>
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
};

export default Home;
