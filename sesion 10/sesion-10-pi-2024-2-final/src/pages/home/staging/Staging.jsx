import { Environment } from "@react-three/drei";

const Staging = () => {
  return (
    <Environment
      files={"https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/kloppenheim_07_puresky_2k.hdr"}
      background={true}
    />
  );
};

export default Staging;
