import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, ScrollControls } from '@react-three/drei'
import MacContainer from './components/MacContainer' 
import './App.css'

function App() {

  // Mackbook landing page

  return (
    <>
    <div className='w-full h-screen'>
      <div className=" absolute flex flex-col items-center text-white top-29  left-1/2 -translate-x-1/2 font-['Halvetica_Now_Display']">
        <h3 className='mac-glow-text text-7xl tracking-tighter font-bold'>mackbook pro.</h3>
        <h5>Oh so pro !</h5>
        <p className='text-center w-3/4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus laudantium libero nesciunt voluptate?</p>
      </div>
     <Canvas camera={{fov: 12, position: [0, -5, 220]}}>
     <OrbitControls enableZoom={false} autoRotate={false} enableRotate={false}/>
     <Environment files={["https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/studio_small_09_1k.hdr"]}/>
     <ScrollControls pages={1}>
     <MacContainer></MacContainer>
     </ScrollControls>
     </Canvas>
    </div> 
    </>
  )
}

export default App
