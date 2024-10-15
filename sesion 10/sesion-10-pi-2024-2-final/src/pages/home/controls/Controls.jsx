import { OrbitControls } from "@react-three/drei";

const Controls = () => {
  
  return (
    <OrbitControls    
      maxPolarAngle={Math.PI * 0.4}
      minPolarAngle={Math.PI * 0.3}
      maxAzimuthAngle={Math.PI * 0.25}
      minAzimuthAngle={-Math.PI * 0.25}
      target={[0, 5, 0]}
    />
  );
};

export default Controls;
