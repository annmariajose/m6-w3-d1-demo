import React, { Component } from 'react';
import Tree from "./TreeDemo/Tree";
import data from "./TreeDemo/data";

class TreeDemo extends Component {
    render() {
        return <Tree data={data} width={600} height={500} />;
    }
}

export default TreeDemo;