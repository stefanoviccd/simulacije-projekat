import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import Model from "./Woodsavertex";

const Scene = () => {
  const scene = useRef();
  useFrame(() => {});
  return (
    <group ref={scene}>
      <Model></Model>
    </group>
  );
};

function Main() {
  return (
    <>
      <Canvas>
        <directionalLight intensity={0.4} />
        <ambientLight intensity={0.2}></ambientLight>
        <OrbitControls></OrbitControls>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
      <div className="header-text">
        <h2>Mi imamo sve što Vam je potrebno!</h2>
      </div>
      <div className="gridDiv">
        <div className="image">
        <video video loop muted autoPlay controls = ''
            className="portfolioImg"
            src="../0001-0120.ogv"

            //src="https://www.daibau.rs/images/backgrounds/90/1small.jpg"
          ></video>
          
          <p>
            Obrada svih materijala vrši se na najsavremenijim mašinama nemačkog
            proizvođača.. Pored standardnog sečenja, nudimo usluge kantovanja
            poliuretanskim lepkom, lasersko kantovanje, krivolinijsko sečenje i
            kantovanje, bušenje rupa i pripremu za sklapanje
            (montažno-demontažni sistem).
          </p>
        </div>
        <div className="desc">
          <p>
            <b>D R V O L E X</b> je firma u kojoj nastaje magija, koju želimo da
            i Vi prepoznate. Bavimo se izradom unikatih proizvoda od epoxy smole
            kao i u kombinaciji punog drveta i smole. Kod nas možete poručiti
            sve vrste stolova po željenim dimenzijama, zidne satove, lampe,
            ukrasne tacne, poslužavnike, daske za serviranje, podmetače za čaše.
            Svi proizvodi su unikatni i posebni. Na Vama je da odaberete oblik,
            vrstu drveta, boju epoxy smole, i dekoraciju po želji!
          </p>
          <img className="drvolex" src="../nenadex12.png"></img>
        </div>
      </div>
    </>
  );
}

export default Main;
