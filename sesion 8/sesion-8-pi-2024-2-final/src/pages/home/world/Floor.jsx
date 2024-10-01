import { RigidBody } from "@react-three/rapier";

const Floor = (props) => {
  return (
    <RigidBody>
      <mesh {...props}>
        <circleGeometry args={[10, 32]} />
        <meshStandardMaterial color={"orange"} />
      </mesh>
    </RigidBody>
  );
};

export default Floor;
