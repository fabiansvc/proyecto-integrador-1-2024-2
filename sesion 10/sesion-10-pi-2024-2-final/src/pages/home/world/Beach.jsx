import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

const Beach = (props) => {
  const { nodes, materials } = useGLTF("/models-3d/beach.glb");

  return (
    <group name="Scene" {...props}>
      <RigidBody name="rbBeach" type="fixed" colliders="trimesh">
        <mesh
          name="Beach"
          geometry={nodes.Beach.geometry}
          material={materials.BeachMaterial}
        />
      </RigidBody>
      <RigidBody name="rbBall" colliders="ball">
        <group name="Ball">
          <mesh
            name="Ball_1"
            geometry={nodes.Ball_1.geometry}
            material={materials.BeachBallTransparentPlasticMaterial}
          />
          <mesh
            name="Ball_2"
            geometry={nodes.Ball_2.geometry}
            material={materials.BeachBallRubberMaterial}
          />
        </group>
      </RigidBody>
      <RigidBody name="rbWaterFloat" colliders="hull" restitution={1.2}>
        <mesh
          name="WaterFloat"
          geometry={nodes.WaterFloat.geometry}
          material={materials.WaterFloatMaterial}
        />
      </RigidBody>
    </group>
  );
};

export default Beach;

useGLTF.preload("/models-3d/beach.glb");
