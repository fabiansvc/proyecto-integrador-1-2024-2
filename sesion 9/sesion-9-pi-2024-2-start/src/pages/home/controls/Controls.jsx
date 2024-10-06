import { OrbitControls } from "@react-three/drei";

const Controls = () => {
  return (
    <OrbitControls    
      maxPolarAngle={Math.PI * 0.45}
      minPolarAngle={Math.PI * 0.25}
      enableZoom={false}
      enablePan={false}
      target={[0, 5, 0]}
    />
  );
};

export default Controls;
