import React, { Component } from 'react'

export default class ChatBoxMessages extends Component {

    constructor() {
        super();
        this.state = {
            messages: [{
                username: "User1",
                message: "something"
            },
            {
                username: "marvin97",
                message: "something2"
            },
            {
                username: "User3",
                message: "something3"
            },
            {
                username: "User1",
                message: "something1"
            },
            {
                username: "User3",
                message: "something looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong"
            },
            {
                username: "User1",
                message: "something"
            },
            {
                username: "marvin97",
                message: "something2"
            },
            {
                username: "User3",
                message: "something3"
            },
            {
                username: "User1",
                message: "something1"
            },
            {
                username: "User3",
                message: "something looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong"
            },
            {
                username: "User1",
                message: "something"
            },
            {
                username: "marvin97",
                message: "something2"
            },
            {
                username: "User3",
                message: "something3"
            },
            {
                username: "User1",
                message: "something1"
            },
            {
                username: "User3",
                message: "something looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong"
            }
            ]
        }
    }

    render() {
        return (
            <div className="d-flex flex-column chatBoxMessages jumbotron mt-4 mb-0" data-simplebar>

                {/* DISPLAY MESSAGES */}
                {this.state.messages.map((message, key) => (
                    <div className="message row m-1" key={key}>
                        <small className="text-break col-3 font-weight-bold">{message.username}:</small>
                        <small className="col p-0" style={{wordBreak : "break-word"}}>{message.message}</small>
                    </div>
                ))}

            </div>
        )
    }
}
