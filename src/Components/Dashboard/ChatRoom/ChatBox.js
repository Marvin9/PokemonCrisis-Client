import React, { Component } from 'react'
import ChatBoxMessages from './ChatBox/ChatBoxMessages'
import MessageButton from './ChatBox/MessageButton'

export default class ChatBox extends Component {
    render() {
        return (
            <div id="chatbox" className="full-height">

                <div className="chatboxHeader">
                    <h2 style={{ textAlign: "center" }}>Welcome to Lobby.</h2>
                </div>

                <ChatBoxMessages />

                <MessageButton />

            </div>
        )
    }
}
