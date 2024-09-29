const Floor = () => {
  return (
    <mesh name="floor" position-y={-0.1} rotation-x={-Math.PI * 0.5} receiveShadow={true}>
      <planeGeometry args={[10, 10]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};

export default Floor;
