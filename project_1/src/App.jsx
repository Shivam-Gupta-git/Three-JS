import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import {
  Bloom,
  EffectComposer,
  ToneMapping,
} from "@react-three/postprocessing";

import "./App.css";
import Scene from "../components/Scene";

// Rolling Circle...........
function App() {
  return (
    <>
      <div className=" w-full  h-[70%]">
        <Canvas flat camera={{ fov: 30 }}>
          <OrbitControls enableZoom={false} />
          <ambientLight />
          <Scene />

          <EffectComposer>
            <Bloom
              mipmapBlur
              intensity={2.0}
              luminanceThreshold={0}
              luminanceSmoothing={0}
            />
            <ToneMapping adaptive />
          </EffectComposer>
        </Canvas>
      </div>
      <div className="w-full bg-black  flex items-center justify-center ">
        <h1 className="text-6xl font-bold text-gray-500">Welcome to nature</h1>
      </div>
    </>
  );
}

export default App;
