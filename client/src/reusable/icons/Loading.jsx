import React, { Component } from 'react'
import SkeletonLoader from "tiny-skeleton-loader-react";

export default class Loading extends Component {
    render() {
        return <SkeletonLoader style={{  marginLeft:"10px",
            marginRight:"5px",
            marginTop:"10px"}} height="80px" width="100px" />;
    }
}
