import { Center, Html, Text, Text3D } from "@react-three/drei";

const WelcomeText = () => {
  return (
    <>
      <Center top left position={[1, 7, 0]}>
        <Text3D
          font="/fonts/blue-ocean.json"
          bevelEnabled
          bevelSize={0.02}
          bevelThickness={0.01}
          height={0.5}
          lineHeight={0.75}
          letterSpacing={0.05}
          size={0.9}
        >
          {`Bienvenido a este \n      espacio y`}
          <meshNormalMaterial />
        </Text3D>
      </Center>
      <Text
        position={[1, 6, 0]}
        color={"purple"}
        anchorX={"center"}
        anchorY={"bottom"}
        font="/fonts/blue-ocean.ttf"
        // fontSize={2}
      >
        {" "}
        Conoce sobre la{" "}
      </Text>
      <Html
        occlude
        wrapperClass="welcome-text"
        center
        distanceFactor={15}
        transform
        position={[1, 5, 0]}
        // style={{
        //     color: "purple",
        //     fontSize: "14pt"
        // }}
      >
        <h1> Pesca Ilegal </h1>
      </Html>
    </>
  );
};

export default WelcomeText;
