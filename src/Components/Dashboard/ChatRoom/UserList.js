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
              <div className="jumbotron mb-2 pb-0">

                <ul className="list-group">

                    <li className="list-group-item font-weight-bold heading">
                        USERS
                    </li>

                    { this.state.users.map((user, key) => (
                        <li className="list-group-item user" key={key}>{user}</li>
                    )) }

                </ul>

              </div>  
            </div>
        )
    }
}
