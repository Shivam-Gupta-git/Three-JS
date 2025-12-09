import React, { useRef } from 'react'
import { useTexture } from '@react-three/drei'
import * as THREE from "three"
import { useFrame } from '@react-three/fiber'

function Scene() {
  let texture = useTexture("./nature.jpg")
  texture.needsUpdate = true
  let cly = useRef(null)
  useFrame((state, delta) => {
    cly.current.rotation.y += delta
  })
  return (
    <group rotation={[0, 1.4, 0.5]}>
    <mesh ref={cly}>
        <cylinderGeometry args={[1, 1, 1, 60, 60, true]}/>
        <meshStandardMaterial map={texture} transparent side={THREE.DoubleSide}/>
    </mesh>
    </group>
  )
}

export default Scene