import React from "react"

class Play extends React.Component {
    state = {
        clientID: 0,
        greeting: <p>Loading...</p>
    };

    componentDidMount() {
        fetch('/getClientID').then(res => res.json()).then(data => this.setState({
                clientID: data.id,
                greeting: <p>Welcome, you are <b>Guest{data.id}</b></p>
            })
        );
    }

    render() {
        return (
            <div className="content">
                {this.state.greeting}
            </div>
        )
    }
}

export default Play
