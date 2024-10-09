import { useCallback, useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

const Dog = (props) => {
  const dogRef = useRef();
  const { nodes, materials, animations } = useGLTF("/models-3d/dog.glb");
  const { actions } = useAnimations(animations, dogRef);

  const [currentAction, setCurrentAction] = useState("Idle");

  console.log(actions);

  const handleDog = useCallback(() => {
    setCurrentAction("Scratch");
  }, []);

  useEffect(() => {
    actions[currentAction].fadeIn(0.5).play();
    return () => actions[currentAction].fadeOut(0.5).stop();
  }, [actions, currentAction]);

  return (
    <RigidBody>
      <group ref={dogRef} {...props} dispose={null} onClick={handleDog}>
        <group name="Scene">
          <group name="Dog">
            <skinnedMesh
              name="Body"
              geometry={nodes.Body.geometry}
              material={materials.DogMaterial}
              skeleton={nodes.Body.skeleton}
              castShadow
            />
            <primitive object={nodes.Root} />
          </group>
        </group>
      </group>
    </RigidBody>
  );
};

export default Dog;
useGLTF.preload("/models-3d/dog.glb");
