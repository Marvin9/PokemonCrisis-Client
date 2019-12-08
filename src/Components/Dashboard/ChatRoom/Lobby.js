import React, { Component } from 'react'

export default class Lobby extends Component {

    constructor() {
        super();
        this.state = {
            lobby: ["Lobby1", "Lobby2"]
        }
    }

    render() {
        return (
            <div id="lobby" className="jumbotron pt-2" style={{ background: "none", borderRadius: 0 }}>

                <ul className="list-group">
                    <li className="list-group-item font-weight-bold lobbyName">Lobby</li>

                    <li className="list-group-item lobbyName">GLOBAL</li>

                    {this.state.lobby.map((lobby, key) => (
                        <li className="list-group-item lobbyName" key={key}>{lobby}</li>
                    ))}

                    <li className="list-group-item text-muted lobbyName">+ Add</li>
                </ul>
            </div>
        )
    }
}
