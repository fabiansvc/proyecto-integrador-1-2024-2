const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 10, 10]} intensity={2} castShadow 
        shadow-camera-left = {-50}
        shadow-camera-right = {50}
        shadow-camera-top = {50}
        shadow-camera-bottom = {-50}
        shadow-camera-far={50}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
    </>
  );
};

export default Lights;
