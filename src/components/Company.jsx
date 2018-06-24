import React, { Component } from "react";

import NavBar from "./navs/nav_bar";
import NavBtn from "./navs/nav_btn";
import Footer from "./footer/footer_main";

class Company extends Component {
    render() {
        return (
            <main className="information">
                <NavBar />
                <NavBtn />

                <div className="information__hero">
                    <h2 className="information__header">About us</h2>
                </div>

                <ul className="slide-list">
                    <li className="slide-list__item">
                        <input type="checkbox" id="info-toggle1" className='slide-list__toggle'/>
                        <label htmlFor="info-toggle1" className="slide-list__button">
                            Our Mission
                            <i className="fas fa-chevron-circle-down  slide-list__icon slide-list__icon--down"></i>
                            <i className="fas fa-chevron-circle-up slide-list__icon slide-list__icon--up"></i>
                        </label>


                        <p className="slide-list__text">
                            JON & LIGIA - Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus veniam tempora ducimus. Eum atque minus autem omnis nulla temporibus vitae ipsum ducimus! Recusandae beatae blanditiis corporis incidunt nisi repellat iure.
                        </p>
                    </li>

                    <li className="slide-list__item">
                        <input type="checkbox" id="info-toggle2" className='slide-list__toggle'/>
                        <label htmlFor="info-toggle2" className="slide-list__button">
                            Careers
                            <i className="fas fa-chevron-circle-down  slide-list__icon slide-list__icon--down"></i>
                            <i className="fas fa-chevron-circle-up slide-list__icon slide-list__icon--up"></i>
                        </label>


                        <p className="slide-list__text">
                            JON & LIGIA - Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus veniam tempora ducimus. Eum atque minus autem omnis nulla temporibus vitae ipsum ducimus! Recusandae beatae blanditiis corporis incidunt nisi repellat iure.
                        </p>
                    </li>

                    <li className="slide-list__item">
                        <input type="checkbox" id="info-toggle3" className='slide-list__toggle'/>
                        <label htmlFor="info-toggle3" className="slide-list__button">
                            Terms & Conditions
                            <i className="fas fa-chevron-circle-down  slide-list__icon slide-list__icon--down"></i>
                            <i className="fas fa-chevron-circle-up slide-list__icon slide-list__icon--up"></i>
                        </label>


                        <p className="slide-list__text">
                            JON & LIGIA - Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus veniam tempora ducimus. Eum atque minus autem omnis nulla temporibus vitae ipsum ducimus! Recusandae beatae blanditiis corporis incidunt nisi repellat iure.
                        </p>
                    </li>

                    <li className="slide-list__item">
                        <input type="checkbox" id="info-toggle4" className='slide-list__toggle'/>
                        <label htmlFor="info-toggle4" className="slide-list__button">
                            Privacy & Cookies
                            <i className="fas fa-chevron-circle-down  slide-list__icon slide-list__icon--down"></i>
                            <i className="fas fa-chevron-circle-up slide-list__icon slide-list__icon--up"></i>
                        </label>


                        <p className="slide-list__text">
                            JON & LIGIA - Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus veniam tempora ducimus. Eum atque minus autem omnis nulla temporibus vitae ipsum ducimus! Recusandae beatae blanditiis corporis incidunt nisi repellat iure.
                        </p>
                    </li>

                </ul>

                <Footer />
            
            </main>
        );
    }
}

export default Company;