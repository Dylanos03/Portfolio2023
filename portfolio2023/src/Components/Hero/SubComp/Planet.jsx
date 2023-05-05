import React from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function PlanetH() {
  return (
    <mesh visible userData={{ hello: "world" }} position={[0, 0, 0]}>
      <sphereGeometry args={[4, 10, 10]} />
      <meshStandardMaterial color={"blue"} />
    </mesh>
  );
}

export default PlanetH;
