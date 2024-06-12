import React from 'react'
import Input from './Input/Input'
import './Form.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";

const Form = () => {
    const navigate = useNavigate()
    
    function headboy() {
        navigate("/headboy");
    }
    
    return (
        <div className="inputs">
            <div className="form">
                <h2>Enter Your Details</h2>
                <Input id="Name" placeholder="Enter Your Name" />
                <Input id="ID" placeholder="Enter Your ID" />
                <Input id="Class" placeholder="Enter Your Class" />
                <button className='login' onClick={headboy}>Login <FontAwesomeIcon icon={faRightToBracket} /></button>
            </div>
        </div>
    )
}

export default Form
