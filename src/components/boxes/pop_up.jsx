import React from 'react';
import PopUp from 'reactjs-popup';
import '../../styles/sign_up.css';

function Modal(props){
    return (
        <PopUp 
        trigger={<button className='btn btn-secondary' type='button'>{props.label}</button>}
        modal>
        {close => (
            <div className='legalModal'>
                <h2>User License Agreement</h2>
                <div>
                GIVE US YOUR INFO SO WE CAN SELL IT MUWAHAHAHAHA.GIVE US YOUR INFO SO WE CAN SELL IT MUWAHAHAHAHA.GIVE US YOUR INFO SO WE CAN SELL IT MUWAHAHAHAHA.GIVE US YOUR INFO SO WE CAN SELL IT MUWAHAHAHAHA.GIVE US YOUR INFO SO WE CAN SELL IT MUWAHAHAHAHA.GIVE US YOUR INFO SO WE CAN SELL IT MUWAHAHAHAHA.GIVE US YOUR INFO SO WE CAN SELL IT MUWAHAHAHAHA.GIVE US YOUR INFO SO WE CAN SELL IT MUWAHAHAHAHA.GIVE US YOUR INFO SO WE CAN SELL IT MUWAHAHAHAHA.GIVE US YOUR INFO SO WE CAN SELL IT MUWAHAHAHAHA.GIVE US YOUR INFO SO WE CAN SELL IT MUWAHAHAHAHA.GIVE US YOUR INFO SO WE CAN SELL IT MUWAHAHAHAHA.GIVE US YOUR INFO SO WE CAN SELL IT MUWAHAHAHAHA.GIVE US YOUR INFO SO WE CAN SELL IT MUWAHAHAHAHA.GIVE US YOUR INFO SO WE CAN SELL IT MUWAHAHAHAHA.GIVE US YOUR INFO SO WE CAN SELL IT MUWAHAHAHAHA.GIVE US YOUR INFO SO WE CAN SELL IT MUWAHAHAHAHA.GIVE US YOUR INFO SO WE CAN SELL IT MUWAHAHAHAHA.GIVE US YOUR INFO SO WE CAN SELL IT MUWAHAHAHAHA.GIVE US YOUR INFO SO WE CAN SELL IT MUWAHAHAHAHA.GIVE US YOUR INFO SO WE CAN SELL IT MUWAHAHAHAHA.GIVE US YOUR INFO SO WE CAN SELL IT MUWAHAHAHAHA.GIVE US YOUR INFO SO WE CAN SELL IT MUWAHAHAHAHA.GIVE US YOUR INFO SO WE CAN SELL IT MUWAHAHAHAHA.GIVE US YOUR INFO SO WE CAN SELL IT MUWAHAHAHAHA.GIVE US YOUR INFO SO WE CAN SELL IT MUWAHAHAHAHA.GIVE US YOUR INFO SO WE CAN SELL IT MUWAHAHAHAHA.GIVE US YOUR INFO SO WE CAN SELL IT MUWAHAHAHAHA.GIVE US YOUR INFO SO WE CAN SELL IT MUWAHAHAHAHA.GIVE US YOUR INFO SO WE CAN SELL IT MUWAHAHAHAHA.GIVE US YOUR INFO SO WE CAN SELL IT MUWAHAHAHAHA.GIVE US YOUR INFO SO WE CAN SELL IT MUWAHAHAHAHA.GIVE US YOUR INFO SO WE CAN SELL IT MUWAHAHAHAHA.GIVE US YOUR INFO SO WE CAN SELL IT MUWAHAHAHAHA.GIVE US YOUR INFO SO WE CAN SELL IT MUWAHAHAHAHA.GIVE US YOUR INFO SO WE CAN SELL IT MUWAHAHAHAHA.GIVE US YOUR INFO SO WE CAN SELL IT MUWAHAHAHAHA.GIVE US YOUR INFO SO WE CAN SELL IT MUWAHAHAHAHA.GIVE US YOUR INFO SO WE CAN SELL IT MUWAHAHAHAHA.GIVE US YOUR INFO SO WE CAN SELL IT MUWAHAHAHAHA.GIVE US YOUR INFO SO WE CAN SELL IT MUWAHAHAHAHA.GIVE US YOUR INFO SO WE CAN SELL IT MUWAHAHAHAHA.GIVE US YOUR INFO SO WE CAN SELL IT MUWAHAHAHAHA.GIVE US YOUR INFO SO WE CAN SELL IT MUWAHAHAHAHA.GIVE US YOUR INFO SO WE CAN SELL IT MUWAHAHAHAHA.GIVE US YOUR INFO SO WE CAN SELL IT MUWAHAHAHAHA.GIVE US YOUR INFO SO WE CAN SELL IT MUWAHAHAHAHA.GIVE US YOUR INFO SO WE CAN SELL IT MUWAHAHAHAHA.GIVE US YOUR INFO SO WE CAN SELL IT MUWAHAHAHAHA.GIVE US YOUR INFO SO WE CAN SELL IT MUWAHAHAHAHA.
                </div>
                
                <br/>
                <button
                className='btn btn-primary m-3'
                onClick={close}
                type='button'>Agree</button>
                <button
                className='btn btn-primary m-3'
                onClick={close} 
                type='button'>Disagree</button>
            </div>
        )}
        </PopUp>
    )
}

export default Modal;