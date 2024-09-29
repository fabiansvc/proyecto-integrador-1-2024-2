/* eslint-disable react/no-unknown-property */
import { useGLTF, useTexture } from "@react-three/drei";
import { useMemo } from "react";
import { RepeatWrapping } from "three";

const TrashCan = (props) => {
  const { nodes, materials } = useGLTF("models-3d/trash-can.glb");

  const PATH = useMemo(() => "materials/floor/patterned_brick_floor_", []);

  const floorTexture = useTexture({
    map: PATH + "diff_1k.jpg",
    //displacementMap: PATH + "disp_1k.png",
    normalMap: PATH + "nor_gl_1k.jpg",
    roughnessMap: PATH + "rough_1k.jpg",
    aoMap: PATH + "ao_1k.jpg",
  }); 

//   floorTexture.map.wrapS = floorTexture.map.wrapT = RepeatWrapping;
//   floorTexture.map.repeat.set(4, 4);

//   floorTexture.normalMap.wrapS = floorTexture.normalMap.wrapT = RepeatWrapping;
//   floorTexture.normalMap.repeat.set(4, 4);

//   floorTexture.roughnessMap.wrapS = floorTexture.roughnessMap.wrapT = RepeatWrapping;
//   floorTexture.roughnessMap.repeat.set(4, 4);

//   floorTexture.aoMap.wrapS = floorTexture.aoMap.wrapT = RepeatWrapping;
//   floorTexture.aoMap.repeat.set(4, 4);

  Object.keys(floorTexture).map((key)=>{
    floorTexture[key].wrapS = floorTexture[key].wrapT = RepeatWrapping;
    floorTexture[key].repeat.set(4, 4);
  });

  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Tong_Sampah"
          geometry={nodes.Tong_Sampah.geometry}
          material={materials.Texture}
        />
        <mesh rotation-x={Math.PI / 2}>
          <boxGeometry args={[10, 10, 0.1]} />
          <meshStandardMaterial
            map={floorTexture.map}
            normalMap={floorTexture.normalMap}
            aoMap={floorTexture.aoMap}
            roughnessMap={floorTexture.roughnessMap}
            //displacementMap={floorTexture.displacementMap}
          />
        </mesh>
      </group>
    </group>
  );
};

export default TrashCan;

useGLTF.preload("models-3d/trash-can.glb");
