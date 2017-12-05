import React, { Component } from "react";
import { connect } from "react-redux";

import { greet } from "../actions/GreetAction";

class HelloWorld extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.greet}>Greet</button>
                <ul>
                    {
                        this.props.greets.greets.map((item, index) => {
                            return <li key={index}>{item}</li>
                        })
                    }
                </ul>
            </div>)
    }
}

//Subscribe topic from root reducer
function mapAppStateToLocalProps(state) {
    return {
        greets: state.greet
    }
}

export default connect(mapAppStateToLocalProps, { greet })(HelloWorld);