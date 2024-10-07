import { OrbitControls } from "@react-three/drei";

const Controls = () => {
  return (
    <OrbitControls    
      maxPolarAngle={Math.PI * 0.45}
      minPolarAngle={Math.PI * 0.25}
      target={[-10, 3, 0]}
    />
  );
};

export default Controls;
