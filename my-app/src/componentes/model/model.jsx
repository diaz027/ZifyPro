import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense, useEffect, useState } from "react";
import "./model.css";

function Model() {
  const [model, setModel] = useState();
  var initialPosition = new THREE.Vector3(-2, -2, 0);
  var initialRotation = new THREE.Euler();

  useEffect(() => {
    new GLTFLoader().load("./sceneFinalisima.gltf", (gltf) => {
      gltf.scene.position.copy(initialPosition);
      gltf.scene.rotation.copy(initialRotation);
      setModel(gltf);
    });
  }, []);

  return model ? <primitive object={model.scene} /> : null;
}

export default function MyModel() {
  return (
    <Canvas className="canvas" style={{ width: "80vh", height: "80vh" }}>
      <Suspense fallback={null}>
        <Model />
      </Suspense>
    </Canvas>
  );
}

// import * as THREE from "three";
// import { Canvas } from "@react-three/fiber";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import { Suspense, useEffect, useState, useRef } from "react";
// import "./model.css";

// function Model() {
//   const [model, setModel] = useState();
//   const modelRef = useRef();

//   // Guarda la posición y rotación iniciales
//   var initialPosition = new THREE.Vector3(-3, -2, 0); // Cambia el valor de x a -2
//   var initialRotation = new THREE.Euler();

//   function pointermove(event) {
//     // Calcula los nuevos valores de posición y rotación
//     var newX = (event.clientX / window.innerWidth) * -2;
//     var newY = (event.clientY / window.innerHeight) * 1;
//     var newRotX = (event.clientY / window.innerHeight) * 1;
//     var newRotY = (event.clientX / window.innerWidth) * -1;

//     // Limita los valores a un máximo de 15
//     newX = Math.min(newX, 15);
//     newY = Math.min(newY, 15);
//     newRotX = Math.min(newRotX, 15);
//     newRotY = Math.min(newRotY, 15);

//     // Aplica los nuevos valores
//     modelRef.current.position.x = initialPosition.x + newX;
//     modelRef.current.position.y = initialPosition.y + newY;
//     modelRef.current.rotation.x = initialRotation.x + newRotX;
//     modelRef.current.rotation.y = initialRotation.y + newRotY;
//   }

//   useEffect(() => {
//     new GLTFLoader().load("./sceneFinalisima.gltf", (gltf) => {
//       setModel(gltf);
//       gltf.scene.scale.set(1.5, 1.5, 1.5); // Aumenta el tamaño del modelo en un 50%
//     });
//   }, []);

//   useEffect(() => {
//     if (modelRef.current) {
//       window.addEventListener("mousemove", pointermove);
//     }

//     return () => {
//       window.removeEventListener("mousemove", pointermove);
//     };
//   }, [model]);

//   return model ? <primitive object={model.scene} ref={modelRef} /> : null;
// }

// export default function MyModel() {
//   return (
//     <Canvas className="canvas" style={{ width: "70vh", height: "70vh" }}>
//       <Suspense fallback={null}>
//         <Model />
//       </Suspense>
//     </Canvas>
//   );
// }
