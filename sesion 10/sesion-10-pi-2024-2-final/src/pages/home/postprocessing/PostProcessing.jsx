import { EffectComposer, Vignette } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

const PostProcessing = () => {
  return (
    <EffectComposer>
      <Vignette
        offset={0.5} // vignette offset
        darkness={0.5} // vignette darkness
        eskil={false} // Eskil's vignette technique
        blendFunction={BlendFunction.NORMAL} // blend mode
      />
    </EffectComposer>
  );
};

export default PostProcessing;
