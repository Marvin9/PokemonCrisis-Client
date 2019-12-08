import React, { Component } from 'react'
import ChatRoom from './ChatRoom/ChatRoom'
import Pokemons from './Pokemons'
import GlobalNews from './GlobalNews'
import Play from './Play'
import Menu from './Menu'

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
                        <div className="col-sm p-0 pr-4">

                            <Pokemons />

                            <GlobalNews />

                            <Play />

                            <Menu />   


                        </div>

                    </div>
                </div>
            </>
        )
    }
}
