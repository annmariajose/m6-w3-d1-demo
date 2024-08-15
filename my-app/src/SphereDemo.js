import React, {Component} from "react";
import { Canvas } from "@react-vertex/core";
import { useViewportSize } from "@react-vertex/dom-hooks";
import Scene from "./SphereDemo/Scene";

function Example() {
    const { width, height } = useViewportSize();
  
    return (
      <Canvas width={width} height={height}>
        <Scene/>
      </Canvas>
    );
  }

class SphereDemo extends Component {
    render() {
        return (
            <Example/>
        );
    }
}

export default SphereDemo;