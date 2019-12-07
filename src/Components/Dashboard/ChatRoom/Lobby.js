import React, { Component } from 'react'

export default class Lobby extends Component {

    constructor() {
        super();
        this.state = {
            lobby: ["Lobby1", "Lobby2", "Lobby3"]
        }
    }

    render() {
        return (
            <div id="lobby" className="jumbotron jumbotron-fluid d-flex flex-column pr-3 pl-1" style={{ background: "none", borderRadius: 0 }}>
                <div className="badge badge-info mb-3 lobbyName">G</div>

                {this.state.lobby.map(lobby => (
                    <small className="badge badge-secondary mb-3 lobbyName">{lobby}</small>
                ))}

                <span className="badge badge-success lobbyName"><h4>+</h4></span>
            </div>
        )
    }
}
