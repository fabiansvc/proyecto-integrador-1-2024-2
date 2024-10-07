import { useGLTF } from "@react-three/drei";

const Ocean = (props) => {
  const { nodes, materials } = useGLTF("/models-3d/ocean.glb");

  return (
    <group {...props} dispose={null}>
        <group name="Scene">
          <group name="Ocean">
            <mesh
              name="Ocean_1"
              castShadow
              receiveShadow
              geometry={nodes.Ocean_1.geometry}
              material={materials.SeaBottomMaterial}
            />
            <mesh
              name="Ocean_2"
              castShadow
              receiveShadow
              geometry={nodes.Ocean_2.geometry}
              material={materials.FishMaterial}
            />
            <mesh
              name="Ocean_3"
              castShadow
              receiveShadow
              geometry={nodes.Ocean_3.geometry}
              material={materials.CoralRockMaterial}
            />
          </group>
          <mesh
            name="Coral"
            castShadow
            receiveShadow
            geometry={nodes.Coral.geometry}
            material={materials.UrchentBodyMaterial}
          />
        </group>
      </group>
  );
};

export default Ocean;

useGLTF.preload("/models-3d/ocean.glb");
