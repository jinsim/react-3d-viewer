import React, { Component } from "react";
import ThreeSceneComponent from "./ThreeSceneComponent";

class ThreeScene extends Component {
    state = {isMounted: true};

    render() {
        const {isMounted = true, loadingPercentage = 0} = this.state;
        return (
            <>
                <button onClick={() => this.setState(state => ({isMounted: !state.isMounted}))}>
                    {isMounted ? "Unmount" : "Mount"}
                </button>
                {isMounted && <ThreeSceneComponent obj={this.props.obj} onProgress={loadingPercentage => this.setState({ loadingPercentage })} />}
                {isMounted && loadingPercentage === 100 && <div>Scroll to zoom, drag to rotate</div>}
                {isMounted && loadingPercentage !== 100 && <div>Loading Model: {loadingPercentage}%</div>}
            </>
        )
    }
}

export default ThreeScene;