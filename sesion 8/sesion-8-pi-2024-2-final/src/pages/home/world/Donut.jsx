import { RigidBody } from "@react-three/rapier";
import { useCallback, useRef } from "react";

const Donut = (props) => {
  const rbDonutRef = useRef(null);

  const handleDonut = useCallback(() => {
    rbDonutRef.current.addTorque({ x: 0, y: 10, z: 0 }, true);
    rbDonutRef.current.applyTorqueImpulse({ x: 0, y: 10, z: -5 }, true);
  }, []);

  return (
    <RigidBody
      name="rbDonut"
      restitution={2}
      gravityScale={0.1}
      mass={75}
      ref={rbDonutRef}
      colliders="ball"
      onCollisionEnter={({ manifold, target, other }) => {
        console.log(
          "Donut collided at world position",
          manifold.solverContactPoint(0)
        );

        if(other.rigidBodyObject.name === "rbFloor") {
          console.log("Donut collided with floor");
        } else if (other.rigidBodyObject.name === "rbBall") {
          console.log("Donut collided with ball");
        }

      }}
      onCollisionExit={() => console.log("Donut exited")}
    >
      <mesh {...props} onClick={handleDonut}>
        <torusGeometry args={[1, 0.3, 16, 32]} />
        <meshStandardMaterial color={"red"} />
      </mesh>
    </RigidBody>
  );
};

export default Donut;
