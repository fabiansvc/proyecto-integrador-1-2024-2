const Floor = (props) => {
  return (
    <mesh {...props}>
      <circleGeometry args={[10, 32]} />
      <meshStandardMaterial color={"orange"} />
    </mesh>
  );
};

export default Floor;
