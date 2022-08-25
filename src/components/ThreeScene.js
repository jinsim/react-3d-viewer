import React, { Component } from "react";
import ThreeSceneComponent from "./ThreeSceneComponent";

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
                {isMounted && loadingPercentage === 100 && <div>스크롤을 통해 화면을 확대/축소하고, 드래그를 통해 3D 모델을 회전시켜보세요!</div>}
                {!isMounted && loadingPercentage === 100 && <div>모델을 불러오는 중입니다...</div>}
                {!isMounted && loadingPercentage !== 100 && <div>Loading Model: {loadingPercentage}%</div>}
            </>
        )
    }
}

export default ThreeScene;