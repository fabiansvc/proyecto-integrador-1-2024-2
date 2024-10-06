import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

const Beach = () => {
  const { nodes, materials } = useGLTF("/models-3d/beach.glb");

  return (
    <group name="Scene">
      <RigidBody name="rbBeach" type="fixed" colliders="trimesh">
        <mesh
          name="Beach"
          geometry={nodes.Beach.geometry}
          material={materials.BeachMaterial}
          receiveShadow
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
            castShadow
          />
        </group>
      </RigidBody>
      <RigidBody name="rbWaterFloat" colliders="hull" restitution={1.25}>
        <mesh
          name="WaterFloat"
          geometry={nodes.WaterFloat.geometry}
          material={materials.WaterFloatMaterial}
          castShadow
        />
      </RigidBody>
    </group>
  );
};

export default Beach;

useGLTF.preload("/models-3d/beach.glb");
