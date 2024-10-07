import {
  Cloud,
  //Environment,
  Sky,
  Sparkles,
  Stars,
} from "@react-three/drei";

const Staging = () => {
  return (
    <>
      {/* <Environment
        ground={{
          height: 20, // Height of the camera that was used to create the env map (Default: 15)
          radius: 60, // Radius of the world. (Default 60)
          scale: 100, // Scale of the backside projected sphere that holds the env texture (Default: 1000)
        }}
        files={["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"]}
        path="/cubemap/sky/"
        background={true}
      /> */}
      <Sky
        sunPosition={[0, 0, -1]} // Places the sun below the horizon
        inclination={0.2} // Adjusts the inclination to simulate the sunset
        azimuth={180} // Adjusts the azimuth angle to change the light direction
        mieCoefficient={0.005} // Adjusts the atmospheric dispersion
        elevation={5} // Adjusts the sun's elevation
        mieDirectionalG={0.07} // Adjusts the sun's brightness
        rayleigh={3} // Adjusts Rayleigh scattering
        turbidity={10} // Adjusts the sky clarity
        exposure={0.5} // Adjusts the sky exposure
      />
      <Sparkles
        position={[-15, 10, -10]} // Sets the position of the sparkles
        color="yellow" // Sets the color of the sparkles
        count={256} // Number of sparkles
        size={10} // Size of each sparkle
        fade={false} // Disables fade effect for the sparkles
        speed={1.5} // Speed of the sparkles' movement
        scale={10} // Scale of the sparkles' spread in the scene
      />
      <Cloud
        seed={1} // Seed for the random generation of the cloud, ensures the same cloud appears each time.
        scale={2} // General scale of the cloud's segments, making the cloud appear larger or smaller.
        volume={5} // Thickness or volume of the cloud's segments, creating a denser appearance.
        color="hotpink" // Color of the cloud, set to "hotpink" instead of the default white.
        fade={100} // Distance from the camera until the cloud segments start fading, creating a gradual disappearance effect.
        segments={40} // Number of segments or particles that make up the cloud. A higher number creates more detail.
        bounds={[10, 2, 2]} // Defines the 3D bounds or area within which the cloud's segments are distributed.
        position={[-5, 20, -20]} // Position of the cloud in the 3D space, set relative to the scene's origin.
        opacity={0.5} // Transparency level of the cloud, making it semi-transparent with a value of 0.5.
        growth={5} // Growth factor that animates the cloud's size. Affects how much the cloud "grows" over time.
        speed={0.5} // Animation speed of the cloud, affecting how quickly the segments move or evolve.
        concentrate={"inside"} // Arrangement of the cloud's volume, where segments are more concentrated inside the bounds.
      />
      <Stars
        radius={100} // Radius of the star field, determining how far the stars are spread out.
        depth={50} // Depth of the star field, affecting the distance of the stars from the camera.
        count={5000} // Number of stars in the field, influencing the density of stars in the scene.
        factor={4} // Factor that scales the size of the stars, making them larger or smaller.
        saturation={0} // Saturation level of the stars, controlling the color intensity.
        fade // Enables the fade effect, making stars appear and disappear gradually.
        speed={1} // Speed of the star field animation, affecting the movement of stars.
      />
    </>
  );
};

export default Staging;
