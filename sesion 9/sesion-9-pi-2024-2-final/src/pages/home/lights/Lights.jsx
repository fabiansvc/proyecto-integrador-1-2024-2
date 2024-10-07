import { useHelper } from "@react-three/drei";

import { useControls } from "leva";
import { useEffect, useRef } from "react";
import { Object3D, SpotLightHelper } from "three";

const Lights = () => {
  const targetObjectRef = useRef();
  const spotLightRef = useRef();

  useHelper(spotLightRef, SpotLightHelper);

  const controlsSL = useControls("Spot Light", {
    colorDL: "white",
    positionXSL: { value: -13, min: -20, max: 20, step: 1 },
    positionYSL: { value: 12, min: -20, max: 20, step: 1 },
    positionZSL: { value: -8, min: -20, max: 20, step: 1 },
    intensitySL: { value: 10, min: 0, max: 20, step: 1 },
    targetSL: { value: { x: -18, y: -6, z: -4 } },
    castShadowSL: { value: true },
    angleSL: {
      value: Math.PI / 8,
      min: 0,
      max: Math.PI * 2,
      step: Math.PI / 180,
    },
    distanceSL: { value: 10, min: 0, max: 100, step: 1 },
  });

  useEffect(() => {
    spotLightRef.current.target = targetObjectRef.current;

    targetObjectRef.current.position.set(
      controlsSL.targetSL.x,
      controlsSL.targetSL.y,
      controlsSL.targetSL.z
    );
  }, [controlsSL.targetSL]);

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight
        color={"#ffffff"}
        position={[0, 10, 10]}
        intensity={2}
        castShadow
        shadow-camera-left={-50}
        shadow-camera-right={50}
        shadow-camera-top={50}
        shadow-camera-bottom={-50}
        shadow-camera-far={50}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <mesh ref={targetObjectRef} position={[-18, -6, -4]}>
        <primitive object={new Object3D()} />
      </mesh>
      <spotLight
        ref={spotLightRef}
        color={controlsSL.colorDL}
        position={[
          controlsSL.positionXSL,
          controlsSL.positionYSL,
          controlsSL.positionZSL,
        ]}
        intensity={controlsSL.intensitySL}
        castShadow={controlsSL.castShadowSL}
        angle={controlsSL.angleSL}
        distance={controlsSL.distanceSL}
        target={targetObjectRef.current}
      />
    </>
  );
};

export default Lights;
