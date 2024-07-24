import React from 'react';
import Input from './Input/Input';
import './Form.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

const Form = () => {
    const [dis,setDis] = useState(true)
    const navigate = useNavigate();
    
    function headboy() {
        navigate("/headboy");
    }
    function check(){
        if(document.getElementById('Authentication').value.length == 7){
            setDis(false)
            }
            else{
            setDis(true)
        }
    }
    return (
        <div className="inputs">
            <div className="form">
                <h2>Enter Your Details</h2>
                <Input onChange={check} id="Authentication" placeholder="Enter Your GR Number"/>
                <button className='login' onClick={headboy} disabled={dis}>Login <FontAwesomeIcon icon={faRightToBracket} /></button>
            </div>
        </div>
    );
}

export default Form;