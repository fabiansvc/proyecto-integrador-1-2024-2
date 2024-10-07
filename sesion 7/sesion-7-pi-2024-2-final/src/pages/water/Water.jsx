import { Canvas } from "@react-three/fiber";
import Controls from "./controls/Controls";
import Lights from "./lights/Lights";
import Ocean from "./world/Ocean";
import Octopus from "./world/Octopus";
import WelcomeText from "./world/WelcomeText";
import "./Water.css";
import { useMemo } from "react";
import { KeyboardControls } from "@react-three/drei";

const Water = () => {
  const cameraSettings = {
    position: [0, 5, 10],
  };

  const map = useMemo(
    () => [
      { name: "forward", keys: ["ArrowUp", "KeyW"] },
      { name: "escape", keys: ["Escape"] },
    ],
    []
  );

  return (
    <KeyboardControls map={map}>
      <Canvas camera={cameraSettings}>
        <Controls />
        <Lights />
        <Octopus />
        <Ocean />
        <WelcomeText />
      </Canvas>
    </KeyboardControls>
  );
};

export default Water;
