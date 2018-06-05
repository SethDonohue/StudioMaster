import React, { Component } from "react";
import { Link } from "react-router-dom";

import Logo from "../../img/logos/StudioMaster-Site-Icon_Purple.png"

class BrandPurple extends Component {
    render() {
        return(
        <section className="section-brand">
            <div className="brand">
                <Link to="/" className="brand__link">
                    <img src={Logo} alt="Studio Master Logo Purple" className="brand__logo u-margin-bottom-small"/>
                    <h1 className="brand__header">
                        <span className="brand__header--strong">Studio</span>Master
                    </h1>
                </Link>
            </div>
        </section>
        )
    }
}

export default BrandPurple;