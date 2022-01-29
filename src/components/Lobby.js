import React from "react";

import LobbyCreate from "./LobbyCreate";

class Lobby extends React.Component {
    state = {
        creating_lobby: false
    }

    createLobby = () => {
        this.setState({
            creating_lobby: true
        });
    }

    render() {
        return (
            <div className="lobby">
                <button onClick={this.createLobby}>Create Lobby</button>
                {this.state.creating_lobby ? <LobbyCreate /> : <></>}
            </div>
        )
    }
}

export default Lobby
