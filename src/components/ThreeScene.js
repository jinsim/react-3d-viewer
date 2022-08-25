import React, { Component } from "react";
import ThreeSceneComponent from "./ThreeSceneComponent";

const fontStyle = {
    marginTop: 3,
    fontSize: 15, // we can control scene size by setting container dimensions
    fontWeight: 600
};

class ThreeScene extends Component {

    state = {isMounted: false};

    render() {
        const {isMounted = false, loadingPercentage = 0} = this.state;
        const isLoaded = () => this.setState({
            isMounted : true
        })
        return (
            <>
                {/* <button onClick={() => this.setState(state => ({isMounted: !state.isMounted}))}>
                    {isMounted ? "Unmount" : "Mount"}
                </button> */}
                {<ThreeSceneComponent objSrc={this.props.objSrc} objPos={this.props.objPos} isLoaded = {isLoaded} camPos={this.props.camPos} onProgress={loadingPercentage => this.setState({ loadingPercentage })} />}
                {isMounted && loadingPercentage === 100 && <div style={fontStyle}>스크롤을 통해 화면을 확대/축소하고, 드래그를 통해 3D 모델을 회전시켜보세요!</div>}
                {!isMounted && loadingPercentage === 100 && <div style={fontStyle}>모델을 불러오는 중입니다...</div>}
                {!isMounted && loadingPercentage !== 100 && <div style={fontStyle}>Loading Model: {loadingPercentage}%</div>}
            </>
        )
    }
}

export default ThreeScene;