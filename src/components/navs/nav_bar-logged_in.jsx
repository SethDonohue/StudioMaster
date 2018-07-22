import React from 'react';
import { Link } from 'react-router-dom';

const loggedInUser = (props) => { 
    return(
        <ul className="navigation__nav-container">
            <li className="navigation__item">
                <Link to={`/profile/${props.user.data.id}`} className="navigation__link">My Studio</Link>
            </li>
            <li className="navigation__item">
                <Link to="/registration" className="navigation__link">{props.user.data.info.firstName}</Link>
            </li>
        </ul>
    )
}

export default loggedInUser;