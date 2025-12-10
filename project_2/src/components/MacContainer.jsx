import { useGLTF, useScroll, useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React from 'react'
import * as THREE from 'three'

function MacContainer() {
  let model = useGLTF("./mac.glb")
  let image = useTexture('./image3.webp')
  let meshes = {}

  model.scene.traverse((e) => {
    meshes[e.name] = e
  })

  meshes.screen.rotation.x = THREE.MathUtils.degToRad(180)
   
  // for image texturing part
  meshes.matte.material.map = image
  meshes.matte.material.emissiveIntensity = 0
  meshes.matte.material.metalness = 0
  meshes.matte.material.roughness = 1

  let data = useScroll()

  useFrame((state, delta) => {
    meshes.screen.rotation.x = THREE.MathUtils.degToRad(180 - data.offset * 90)
  })
  return (
    <group position={[0, -10, 20]}>
      <primitive object={model.scene}></primitive>
    </group>
  )
} 

export default MacContainer 