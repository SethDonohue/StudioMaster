import React, { Component } from "react";
import { Link } from "react-router-dom";

import Logo from "../../img/logos/StudioMaster-Logo-Stacked.png"

class BrandPurple extends Component {
    render() {
        return(
        <section className="section-brand">
            <div className="brand">
                <Link to="/" className="brand__link">
                    <img src={Logo} alt="Studio Master Logo Stacked" className="brand__logo u-margin-bottom-medium"/>
                </Link>
            </div>
        </section>
        )
    }
}

export default BrandPurple;