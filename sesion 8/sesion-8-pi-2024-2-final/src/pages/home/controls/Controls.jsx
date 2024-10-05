import { OrbitControls } from "@react-three/drei";

const Controls = () => {
  return (
    <OrbitControls
      // Sets the maximum horizontal rotation angle (azimuth) to 45 degrees to the right
      maxAzimuthAngle={Math.PI * 0.25}
      // Sets the minimum horizontal rotation angle (azimuth) to 45 degrees to the left
      minAzimuthAngle={-Math.PI * 0.25}
      // Sets the maximum vertical rotation angle (polar) to about 81 degrees from the top
      maxPolarAngle={Math.PI * 0.45}
      // Sets the minimum vertical rotation angle (polar) to about 45 degrees from the top
      minPolarAngle={Math.PI * 0.25}
      // Disables zoom functionality (users cannot zoom in or out)
      enableZoom={false}
      // Disables panning functionality (users cannot move the camera horizontally or vertically)
      enablePan={false}
    />
  );
};

export default Controls;
