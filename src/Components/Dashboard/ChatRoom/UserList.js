import React, { Component } from 'react'

export default class UserList extends Component {

    constructor() {
        super();
        this.state = {
            users : ["User1", "User2", "User3"]
        }
    }

    render() {
        return (
            <div id="userList">
              <div className="jumbotron jumbotron-fluid pt-0">

                <ul className="list-group">

                    <li className="list-group-item font-weight-bold heading">
                        USERS
                    </li>

                    { this.state.users.map(user => (
                        <li className="list-group-item user">{user}</li>
                    )) }

                </ul>

              </div>  
            </div>
        )
    }
}
