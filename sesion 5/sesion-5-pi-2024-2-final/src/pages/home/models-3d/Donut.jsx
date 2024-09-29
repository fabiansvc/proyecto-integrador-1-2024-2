const Donut = () => {
  return (
    <mesh name="donut" position={[2, 1, 0]} rotation-x={-Math.PI * 0.25} castShadow>
      <torusGeometry args={[1, 0.2, 16]} />
      <meshStandardMaterial color="purple" />
    </mesh>
  );
};

export default Donut;
