import { useHelper } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import {
  Color,
  DirectionalLightHelper,
  MathUtils,
  PointLightHelper,
  SpotLightHelper,
} from "three";

const Lights = () => {
  const directionalLightRef = useRef();
  useHelper(directionalLightRef, DirectionalLightHelper, 1, "red");

  const pointLightRef = useRef();
  useHelper(pointLightRef, PointLightHelper, 1, "blue");

  const spotLightRef = useRef();
  useHelper(spotLightRef, SpotLightHelper, 1, "green");

  useFrame((state) => {
    spotLightRef.current.position.x = MathUtils.lerp(
      -3,
      3,
      Math.tan(state.clock.elapsedTime)
    );
  });

  return (
    <>
      <hemisphereLight
        //position={[0, 5, 0]}
        intensity={0}
        color={new Color("red")}
        groundColor={new Color("blue")}
      />
      <spotLight
        ref={spotLightRef}
        castShadow={true}
        color={0xe800ff}
        position={[-3, 3, 2]}
        intensity={1000}
        angle={Math.PI / 12}
        distance={8}
      />
      <pointLight
        ref={pointLightRef}
        color={0x00fffb}
        position={[2, 1, 1]}
        intensity={0}
        castShadow
      />
      <ambientLight color={"#8f00ff"} intensity={1} />
      <directionalLight
        ref={directionalLightRef}
        color={"yellow"}
        position={[0, 5, 5]}
        intensity={5}
        shadow-mapSize={[64, 64]}
        //shadow-camera-near={3}
        shadow-camera-far={10}
        shadow-camera-left={-3}
        shadow-camera-right={5}
        shadow-camera-top={1}
        shadow-camera-bottom={-1}
        castShadow
      />
    </>
  );
};

export default Lights;
