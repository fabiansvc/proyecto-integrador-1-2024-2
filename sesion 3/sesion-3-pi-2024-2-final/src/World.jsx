/* eslint-disable react/no-unknown-property */
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import House from "./House";

const World = () => {
  return (
    <Canvas
      camera={{
        position: [2, 0, 5],
      }}
    >
      <OrbitControls
        enableZoom={true} // Habilita o deshabilita el zoom (scroll)
        autoRotate={false} // Si es true, la cámara rota automáticamente alrededor del objetivo
        autoRotateSpeed={2.0} // Velocidad de rotación automática, solo se aplica si autoRotate es true
        enablePan={true} // Permite el desplazamiento (pan) de la cámara
        minDistance={5} // Distancia mínima permitida desde el objetivo (para zoom)
        maxDistance={20} // Distancia máxima permitida desde el objetivo (para zoom)
        minPolarAngle={0} // Ángulo polar mínimo (en radianes) para la cámara, limita el movimiento vertical
        maxPolarAngle={Math.PI / 2} // Ángulo polar máximo (en radianes) para la cámara
        enableDamping={true} // Si es true, añade amortiguación al movimiento de la cámara
        dampingFactor={0.1} // Factor de amortiguación, se aplica si enableDamping es true
        rotateSpeed={1.0} // Velocidad de rotación de la cámara con el mouse
      />
      <ambientLight intensity={1.5} />
      <directionalLight position={[0, 10, 10]} />
      <House />
    </Canvas>
  );
};

export default World;
