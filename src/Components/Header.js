import React, { Component } from 'react'

export default class Header extends Component {

    constructor() {
        super()
        this.state = {
            loggedIn : false
        }
    }

    render() {
        return (
            <>
                <nav className="navbar navbar-dark bg-dark" id="navbar">
                    <div className="container">

                        {/* BRAND NAME */}
                        <a className="navbar-brand" href="/">Pokemon Crisis</a>

                        {/* MENU */}
                        <div className="float-right">
                        { this.loggedIn ? 
                            (<>
                                {/* TODO - dropdown menu with options like logout, user settings etc. */}
                            </>) 
                          : (<>
                                <button type="button" className="btn btn-primary mr-3">Log In</button>
                                <button type="button" className="btn btn-primary">Register</button>
                             </>)}
                        </div>

                    </div>
                </nav>
            </>
        )
    }
}
