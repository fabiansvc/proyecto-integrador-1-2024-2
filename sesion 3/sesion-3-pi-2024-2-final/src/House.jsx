/* eslint-disable react/no-unknown-property */

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const House = () => {
  const boxRef = useRef(null);

  useFrame((state, delta) => {
    boxRef.current.rotation.y += 1 * delta;
  });

  return (
    <group scale={[2, 1, 3]}>
      <mesh position-y={1} rotation-y={Math.PI * 0.25} scale-y={1.5}>
        <coneGeometry args={[1, 1, 4]} />
        <meshStandardMaterial color={0xffc300} />
      </mesh>
      <mesh ref={boxRef}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={"purple"} />
      </mesh>
    </group>
  );
};

export default House;
