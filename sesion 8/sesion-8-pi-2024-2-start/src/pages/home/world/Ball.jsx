const Ball = (props) => {
  return (
    <mesh {...props}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color={"purple"} />
    </mesh>
  );
};

export default Ball;
