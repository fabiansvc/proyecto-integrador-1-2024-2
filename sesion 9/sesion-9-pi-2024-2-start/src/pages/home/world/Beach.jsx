import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

const Beach = (props) => {
  const { nodes, materials } = useGLTF("/models-3d/beach.glb");

  return (
    <RigidBody type="fixed" colliders="trimesh">
      <group {...props} dispose={null}>
        <mesh
          geometry={nodes.Beach.geometry}
          material={materials.BeachMaterial}
        />
      </group>
    </RigidBody>
  );
};

export default Beach;

useGLTF.preload("/models-3d/beach.glb");
