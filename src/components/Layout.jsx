import Navbar from './NavBar'
import React, { Component } from 'react';

class Layout extends Component {
    render() {
        return (
            <div>
                <Navbar activeNav={this.props.activeNav}/>
               {this.props.children} 
            </div>
        );
    }
}

export default Layout;