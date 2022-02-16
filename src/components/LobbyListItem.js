import React from "react";

class LobbyListItem extends React.Component {
    render() {
        return (
            <div className="lobby-list-item">
                <p>{this.props.data.name}</p>
                <p>{this.props.data.owner}</p>
            </div>
        )
    }
}

export default LobbyListItem
