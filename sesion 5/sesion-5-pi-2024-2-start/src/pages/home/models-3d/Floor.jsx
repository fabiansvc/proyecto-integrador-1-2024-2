const Floor = () => {
  return (
    <mesh name="floor" rotation-x={-Math.PI * 0.5}>
      <planeGeometry args={[10, 10]} />
      <meshBasicMaterial color="orange" />
    </mesh>
  );
};

export default Floor;
