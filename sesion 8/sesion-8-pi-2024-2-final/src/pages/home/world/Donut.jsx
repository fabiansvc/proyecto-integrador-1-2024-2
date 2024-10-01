import { CuboidCollider, RigidBody } from "@react-three/rapier";
import { useCallback, useRef } from "react";

const Donut = (props) => {
  const rbDonutRef = useRef(null);

  const handleDonut = useCallback(() => {
    rbDonutRef.current.applyTorqueImpulse({ x: -3, y: 8, z: -5 }, true);
  }, []);

  return (
    <RigidBody ref={rbDonutRef} colliders={false} friction={2}>
      <mesh {...props} onClick={handleDonut}>
        <torusGeometry args={[1, 0.3, 16, 32]} />
        <meshStandardMaterial color={"red"} />
      </mesh>
      <CuboidCollider args={[1, 0.5, 1]} position={props.position} />
    </RigidBody>
  );
};

export default Donut;
