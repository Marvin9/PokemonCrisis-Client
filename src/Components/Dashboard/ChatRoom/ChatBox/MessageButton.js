import React, { Component } from 'react'

export default class MessageButton extends Component {
    render() {
        return (
            <div className="input-group mt-3">
                <input type="text" className="form-control" placeholder="Type Message"/>
                <button className="btn btn-primary ml-1">Send</button>
            </div>
        )
    }
}
