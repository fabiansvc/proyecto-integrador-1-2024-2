import { RigidBody } from "@react-three/rapier";
import { useCallback, useRef } from "react";

const Donut = (props) => {
  const rbDonutRef = useRef(null);

  const handleDonut = useCallback(() => {
    rbDonutRef.current.applyTorqueImpulse({ x: 0, y: 10, z: -5 }, true);
  }, []);

  return (
    <RigidBody
      name="rbDonut"
      gravityScale={0.1}
      ref={rbDonutRef}
      colliders={"hull"}
      friction={0}
      restitution={2}
      onCollisionEnter={({ manifold, target, other }) =>{
        console.log("Donut collide at world position", manifold.solverContactPoint(0));
        if(other.rigidBodyObject.name === "rbFloor"){
          console.log("Donut collide with floor");
        }
        console.log(target.rigidBodyObject.name);
      }
        
      }
      onCollisionExit={() => console.log("Donut did not collide")}
    >
      <mesh {...props} onClick={handleDonut}>
        <torusGeometry args={[1, 0.3, 16, 32]} />
        <meshStandardMaterial color={"red"} />
      </mesh>
      {/* <BallCollider args={[1]} position={props.position} /> */}
    </RigidBody>
  );
};

export default Donut;
