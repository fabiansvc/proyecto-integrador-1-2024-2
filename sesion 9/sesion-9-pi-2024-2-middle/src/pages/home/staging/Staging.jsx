import { Cloud, Environment, Sky, Sparkles, Stars } from "@react-three/drei";

const Staging = () => {
  return (
    <>
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
      <Cloud
        seed={1}
        scale={2}
        volume={5}
        color={"hotpink"}
        fade={100}
        segments={40}
        bounds={[10, 2, 2]}
        position={[-5, 20, -20]}
        opacity={0.5}
        growth={5}
        speed={0.5}
        concentrate="inside"
      />
      <Sparkles
        position={[-15, 10, -10]}
        color={"yellow"}
        count={256}
        size={10}
        fade={false}
        speed={1.5}
        scale={10}
      />
      <Sky
        sunPosition={[0, 0, 1]}
        inclination={0.2}
        azimuth={180}
        mieCoefficient={0.005}
        elevation={5}
        mieDirectionalG={0.07}
        rayleigh={3}
        turbidity={10}
        exposure={0.5}
      />
      {/* <Environment
        ground={{
          height: 20,
          radius: 60,
          scale: 100,
        }}
        //preset="night"
        //files={"/hdris/sky/sky_2k.hdr"}
        //files={"https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/autumn_field_puresky_2k.hdr"}
        files = {[
            "px.png",
            "nx.png",
            "py.png",
            "ny.png",
            "pz.png",
            "nz.png",
        ]}
        path="/cubemap/sky/"
        background={true}
      /> */}
    </>
  );
};

export default Staging;
