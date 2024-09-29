const Donut = () => {
  return (
    <mesh name="donut" position={[2, 1, 0]} rotation-x={-Math.PI * 0.25}>
      <torusGeometry args={[1, 0.2, 16]} />
      <meshBasicMaterial color="purple" />
    </mesh>
  );
};

export default Donut;
