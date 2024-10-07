import { Environment } from "@react-three/drei";

const Staging = () => {
  return (
    <Environment
      ground={{
        height: 20, // Height of the camera that was used to create the env map (Default: 15)
        radius: 60, // Radius of the world. (Default 60)
        scale: 100, // Scale of the backside projected sphere that holds the env texture (Default: 1000)
      }}
      files={[
        "px.png",
        "nx.png",
        "py.png",
        "ny.png",
        "pz.png",
        "nz.png",
      ]}
      path="/cubemap/sky/"
      background={true}
    />
  );
};

export default Staging;