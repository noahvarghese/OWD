import React, { useEffect, useState } from "react";
import * as Three from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import "./page.scss";

const WebAR: React.FC = () => {
    // const [scene, setScene] = useState(new Three.Scene());
    const [divRef, setDivRef] = useState<HTMLDivElement | null>(null);

    useEffect(() => {
        if (divRef !== null) {
            const scene = new Three.Scene();
            // const camera = new Three.PerspectiveCamera(
            //     75,
            //     300 / 500,
            //     0.1,
            //     1000
            // );
            const renderer = new Three.WebGLRenderer();
            renderer.setSize(300, 500);

            divRef.appendChild(renderer.domElement);

            const loader = new GLTFLoader();

            loader.load(
                "/windows/models/test.gltf",
                (gltf) => {
                    scene.add(gltf.scene);
                },
                (event) => console.log(event),
                (err) => console.error(err)
            );
        }
    }, [divRef]);

    return (
        <div className="page" id="WebAR" style={{ margin: "2rem 0" }}>
            <h1>Web AR</h1>
            <div
                id="arContainer"
                style={{
                    width: "300px",
                    height: "500px",
                    backgroundColor: "#f0f0f0",
                    margin: "2rem 0",
                }}
                ref={setDivRef}
            ></div>
        </div>
    );
};

export default WebAR;
