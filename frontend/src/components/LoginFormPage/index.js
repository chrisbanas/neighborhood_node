import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import './LoginForm.css';
import Form from './Form/Form'

export default function LoginFormPage() {

    return (
        <>
            <Form />
        </>
    );
}
