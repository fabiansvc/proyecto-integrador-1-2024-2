import { useGLTF, useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Octopus = (props) => {
  const { nodes, materials } = useGLTF("/models-3d/octopus.glb");
  const [sub, get] = useKeyboardControls();
  const octopusRef = useRef(null);

  const handleOctopus = (e) => {
    e.stopPropagation()
    console.log(e);
  };

  useFrame((state, delta) => {
    const { forward } = get();

    if(forward){
      octopusRef.current.position.x = Math.cos(state.clock.elapsedTime * 2)
      octopusRef.current.position.y += 1 * delta;
    }
    
    const pressed = get().back
  });

  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <mesh
          ref={octopusRef}
          name="Octopus"
          geometry={nodes.Octopus.geometry}
          material={materials.OctopusMaterial}
          onClick={(e) => handleOctopus(e)}
        />
      </group>
    </group>
  );
};

export default Octopus;

useGLTF.preload("/models-3d/octopus.glb");
