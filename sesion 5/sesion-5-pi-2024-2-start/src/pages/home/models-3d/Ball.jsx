const Ball = () => {
  return (
    <mesh name="ball" position={[-2, 1, 0]}>
      <sphereGeometry args={[1, 16, 32]} />
      <meshBasicMaterial color="hotpink" />
    </mesh>
  );
};

export default Ball;
