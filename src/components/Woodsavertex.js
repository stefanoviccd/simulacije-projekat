import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/woodsavertex.glb')
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    actions.akcijaudarac.play();
    actions.okretanjetestere.play();
    
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="cekic" position={[-1.51, -0.51, -0.32]} rotation={[3.12, -0.07, -0.61]} scale={[0.05, -1.2, -0.08]}>
        <mesh geometry={nodes.Cylinder003.geometry} material={materials.metal} />
        <mesh geometry={nodes.Cylinder003_1.geometry} material={materials.drvo} />
      </group>
      <mesh
        geometry={nodes.podloga.geometry}
        material={materials['Material.002']}
        position={[0.24, -1.31, 18.56]}
        scale={[55891.66, -21.39, -89.39]}
      />
      <mesh
        geometry={nodes.Text.geometry}
        material={nodes.Text.material}
        position={[-0.65, -0.91, -0.41]}
        rotation={[1.82, 0, 0]}
        scale={1.14}
      />
      <mesh
        name="materijaltestera"
        geometry={nodes.materijaltestera.geometry}
        material={materials.me}
        position={[4.31, -1.31, 0.87]}
        rotation={[-1.71, 0, 0]}
        scale={[0.52, 0.06, 0.52]}
      />
      <mesh
        geometry={nodes.kutija.geometry}
        material={nodes.kutija.material}
        position={[2.26, -0.63, -0.34]}
        rotation={[0.27, 0.01, 0.01]}
        scale={[2.1, 0.57, 0.33]}
      />
    </group>
  )
}

useGLTF.preload('/woodsavertex.glb')