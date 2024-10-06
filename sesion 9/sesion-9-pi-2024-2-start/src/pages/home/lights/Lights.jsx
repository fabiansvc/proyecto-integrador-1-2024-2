const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 10, 10]} intensity={2} castShadow />
    </>
  );
};

export default Lights;
