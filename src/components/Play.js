import React from "react";

import Lobby from "./Lobby";

class Play extends React.Component {
    state = {
        clientID:   0,
        clientUUID: "",
        greeting:   <p>Loading...</p>
    };

    componentDidMount() {
        fetch("/getClientID").then(res => res.json()).then(data => this.setState({
                clientID:   data.id,
                clientUUID: data.uuid,
                greeting:   <p>Welcome, you are <b>Guest{data.id}</b></p>
            })
        );
    }

    render() {
        return (
            <div className="content">
                {this.state.greeting}
                {this.state.clientID ? <Lobby uuid={this.state.clientUUID} /> : <></>}
            </div>
        )
    }
}

export default Play
