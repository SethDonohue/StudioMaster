import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';

import SignOn from '../../containers/Registration/sign_on';

class NoUser extends Component {
    render(){



        return(
            <ul className="navigation__nav-container">
                <li className="navigation__item">
                    <Link to="/registration" className="navigation__link">Create Account</Link>
                </li>
                <li className="navigation__item">
                    <Popup trigger={<a className='navigation__log-in'>Enter My Studio</a>}
                            modal>
                        <div className="navigation__pop-up">
                            <SignOn />
                        </div>
                    </Popup>
                </li>
                    </ul>
        )

    }
}



export default NoUser;