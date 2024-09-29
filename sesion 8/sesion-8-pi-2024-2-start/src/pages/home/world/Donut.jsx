const Donut = (props) => {
  return (
    <mesh {...props}>
      <torusGeometry args={[1, 0.3, 16, 32]} />
      <meshStandardMaterial color={"red"} />
    </mesh>
  );
};

export default Donut;
