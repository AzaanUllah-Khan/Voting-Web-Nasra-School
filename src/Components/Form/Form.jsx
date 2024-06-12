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
        if(document.getElementById('Name').value != "" && document.getElementById('ID').value != "" && document.getElementById('Class').value != ""){
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
                <Input onChange={check} id="Name" placeholder="Enter Your Name"/>
                <Input onChange={check} id="ID" placeholder="Enter Your ID" />
                <Input onChange={check} id="Class" placeholder="Enter Your Class" />
                <button className='login' onClick={headboy} disabled={dis}>Login <FontAwesomeIcon icon={faRightToBracket} /></button>
            </div>
        </div>
    );
}

export default Form;