import { RigidBody } from "@react-three/rapier";

const Floor = (props) => {
  return (
    <RigidBody name="rbFloor" friction={2}>
      <mesh {...props}>
        <circleGeometry args={[10, 32]} />
        <meshStandardMaterial color={"orange"} />
      </mesh>
    </RigidBody>
  );
};

export default Floor;
