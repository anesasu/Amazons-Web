import React from "react";

import LobbyCreate   from "./LobbyCreate";
import LobbyListItem from "./LobbyListItem";

class Lobby extends React.Component {
    state = {
        creating_lobby: false,
        lobbies:        []
    }

    componentDidMount() {
        fetch("/getLobbies").then(res => res.json()).then(data => this.setState({
                lobbies: data.lobbies,
            })
        );
    }

    setLobbies = (data) => {
        this.setState({
            lobbies: data.lobbies,
        })
    }

    createLobby = () => {
        this.setState({
            creating_lobby: true
        });
    }

    hideCreate = () => {
        this.setState({
            creating_lobby: false
        });
    }

    render() {
        return (
            <div className="lobby">
                <button onClick={this.createLobby}>Create Lobby</button>
                {this.state.creating_lobby ? <LobbyCreate setLobbies={this.setLobbies} hideCreate={this.hideCreate} uuid={this.props.uuid} /> : <></>}

                <h2 className="break">Open Lobbies</h2>
                <div className="lobby-list">
                    <div className="lobby-list-header">
                        <p>Title</p>
                        <p>Creator</p>
                    </div>
                    {this.state.lobbies.map((l) => <LobbyListItem data={l} />)}
                </div>
            </div>
        )
    }
}

export default Lobby
