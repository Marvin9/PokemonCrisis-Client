import React, { Component } from 'react'
import UserList from './UserList'
import Lobby from './Lobby'
import ChatBox from './ChatBox'

export default class ChatRoom extends Component {
    render() {
        return (
            <>
                <div className="container-fluid">
                    <div className="row">
                        
                        {/* USER LIST */}
                        <div className="col-sm-4 p-0">
                            <UserList />
                        </div>

                        {/* CHAT BOX */}
                        <div className="col-sm-7 p-0">
                            <ChatBox />
                        </div>

                        {/* LOBBY */}
                        <div className="col-sm-1 p-0">
                            <Lobby />
                        </div>

                    </div>
                </div>
            </>
        )
    }
}
