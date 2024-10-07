import { Canvas } from "@react-three/fiber";
import Controls from "./controls/Controls";
import Lights from "./lights/Lights";
import { Physics } from "@react-three/rapier";
import Beach from "./world/Beach";
import Dog from "./world/Dog";
import Staging from "./staging/Staging";
import { Leva } from "leva";
import { Float, Loader, Text } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { Suspense } from "react";

const Home = () => {
  const cameraSettings = {
    position: [-18, 5, 12],
    fov: 60,
  };

  return (
    <>
      <Leva collapsed />
      <Canvas shadows camera={cameraSettings}>
        <Suspense fallback={null}>
          <Perf position={"top-left"} />
          <Controls />
          <Lights />
          <Staging />
          <Physics debug={false}>
            <Beach />
            <Dog position={[-15, 6.8, -7]} />
          </Physics>
          <Float
            speed={2} // Animation speed, defaults to 1
            rotationIntensity={2} // XYZ rotation intensity, defaults to 1
            floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
            floatingRange={[1, 3]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
          >
            <Text position-y={2} color={"purple"}>
              {"Salio el sol"}
            </Text>
          </Float>
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
};

export default Home;
