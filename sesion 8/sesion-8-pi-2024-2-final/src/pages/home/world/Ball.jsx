import { RigidBody, vec3 } from "@react-three/rapier";
import { useCallback, useRef } from "react";

const Ball = (props) => {
  const rbBallRef = useRef(null);

  const handleBall = useCallback(() => {
    rbBallRef.current.applyImpulse({ x: 0, y: 20, z: -5 }, true);
  }, []);

  return (
    <RigidBody ref={rbBallRef} colliders="ball" type="dynamic">
      <mesh {...props} onClick={handleBall}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color={"purple"} />
      </mesh>
    </RigidBody>
  );
};

export default Ball;
