const Ball = () => {
  return (
    <mesh name="ball" position={[-2, 1, 0]} castShadow>
      <sphereGeometry args={[1, 16, 32]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
};

export default Ball;
