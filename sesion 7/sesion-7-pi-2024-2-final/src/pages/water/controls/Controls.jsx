import { OrbitControls, useKeyboardControls } from "@react-three/drei";
import { useEffect } from "react";

const Controls = () => {
  const [sub, get] = useKeyboardControls();

  useEffect(() => {
    return sub(
      (state) => state.escape,
      (pressed) => console.log("escape", pressed)
    );
  });

  return <OrbitControls makeDefault />;
};

export default Controls;
