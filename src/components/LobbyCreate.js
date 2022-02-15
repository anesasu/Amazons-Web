import React from "react";

class LobbyCreate extends React.Component {
    state = {
        name: ""
    };

    updateName = e => {
        this.setState({
            name: e.target.value
        });
    };

    create = () => {
        fetch("/createLobby", {
            method:  "post",
            headers: {"Content-Type": "application/json"},
            body:    JSON.stringify({name: this.state.name})
        }).then(res => res.json()).then(data => {
            this.props.setLobbies(data);
        });
    };

    render() {
        return (
            <div className="sub-content">
                <h2>Create Lobby</h2>

                <p className="label">Lobby Name</p>
                <input type="text" value={this.state.name} onChange={this.updateName}></input>

                <button onClick={this.create}>Create</button>
            </div>
        )
    }
}

export default LobbyCreate
