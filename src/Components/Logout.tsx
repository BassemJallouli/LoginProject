import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class extends Component {
    render() {
        return (
            <div>
                <h1>You are log out</h1>
                <Link to="/logout">Login again</Link>
            </div>
        )
    }
}
