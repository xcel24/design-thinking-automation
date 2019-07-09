import React, { Component } from 'react';
import {Link} from 'react-router-dom';    

export default class NavigationBar extends Component {
    render() {
        return (
           <>
            <div className="mynav">
                <nav>
                    <ul>
                        <li className="dashboard">DESIGN THINKING DASHBOARD </li>
                        <Link to={{
                            pathname:'/'
                        }}>
                            <li className="data">Logout</li>
                        </Link>
                    </ul>
                </nav>
            </div>
           </>
        )
    }
}
