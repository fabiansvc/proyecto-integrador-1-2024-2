import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { useCallback, useRef } from "react";

const Ball = (props) => {
  const rbBallRef = useRef(null);

  useFrame((state, delta) => {
    //rbBallRef.current.addForce({ x: 0, y: 0, z: -0.1 }, true);
    // const rbBallPosition = rbBallRef.current.translation();
    // rbBallRef.current.setTranslation(
    //   {
    //     x: (rbBallPosition.x -= -1 * delta),
    //     y: rbBallPosition.y,
    //     z: (rbBallPosition.z -= 1 * delta),
    //   },
    //   true
    // );
    
  });

  const handleBall = useCallback(() => {
    //rbBallRef.current.applyImpulse({ x: 0, y: 20, z: -5 }, true);
    rbBallRef.current.setAngvel({ x: 1, y: 1, z: 0 }, true);
  }, []);

  return (
    <RigidBody name="rbBall" ref={rbBallRef} type="dynamic" colliders="ball">
      <mesh {...props} onClick={handleBall}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color={"purple"} />
      </mesh>
    </RigidBody>
  );
};

export default Ball;
