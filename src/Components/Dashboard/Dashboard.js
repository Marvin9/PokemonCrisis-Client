import React, { Component } from 'react'
import ChatRoom from './ChatRoom/ChatRoom'

export default class Dashboard extends Component {

    render() {
        return (
            <>
                <div className="container-fluid">
                    <div className="row">

                        {/* FIRST COLUMN (7 GRIDS) FOR CHAT ROOM */}
                        <div className="col-sm-7">

                            {/* CHAT ROOM */}
                            <ChatRoom />

                        </div>

                        {/* SECOND COLUMN (5 GRIDS) FOR NEWS, PLAY, MENUS ETC. */}
                        <div className="col-sm">hello-2</div>

                    </div>
                </div>
            </>
        )
    }
}
