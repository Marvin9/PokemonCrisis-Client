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
                        <div className="col-sm-3 p-0 sidebar-lobby bg-dark">
                            <UserList />
                            <Lobby />
                        </div>

                        {/* CHAT BOX */}
                        <div className="col-sm">
                            <ChatBox />
                        </div>

                    </div>
                </div>
            </>
        )
    }
}
