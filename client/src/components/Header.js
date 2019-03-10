import React from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends React.Component{
    renderContent(){
        switch(this.props.auth){
            case null:
                return
            case false:
                return <a href='/auth/google'>Log in with Google</a>
            default: 
                return <a href='/api/logout'>Logout</a>
        }
    }
    render(){
        console.log(`This is our props`)
        console.log(this.props);
        return(
            <nav>
                <div className='nav-wrapper'>
                    <Link to={this.props.auth?'/surveys':'/'} className='left brand-logo'>
                        Emaily
                    </Link>
                    <ul className='right'>
                        <li>
                            {this.renderContent()}
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

const mapStateToProps= function({auth}){ //taking state.auth
    return {auth};
}

export default connect(mapStateToProps)(Header);