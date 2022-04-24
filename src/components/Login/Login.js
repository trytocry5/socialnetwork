import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import loginFormSchema from "../FormValidation/LoginFormSchema";
import f from './Login.module.css';
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Navigate } from "react-router-dom";


const Login = (props) => {

    const onSubmit = (values, { setSubmitting, setStatus }) => {
        props.login(values.email, values.password, values.rememberMe, setStatus);
        setSubmitting(false);
    };

    if (props.isAuth) {
        return <Navigate to={"/profile"} />
    }

    return (
        <div className={f.loginSection}>
            <div className={f.loginFormBlock}>
                <h1>Login</h1>
                <Formik
                    initialValues={{ email: '', password: '', rememberMe: false }}
                    validate={values => {
                        const errors = {};
                        if (!values.email) {
                            errors.email = 'Required';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            errors.email = 'Invalid email address';
                        }
                        return errors;
                    }}
                    onSubmit={onSubmit}
                    validationSchema={loginFormSchema}>
                    {formik => (
                        <Form>
                            <div className={f.fieldBlock}>
                                <Field type={'text'} name={'email'} placeholder={'e-mail'} />
                            </div>

                            <ErrorMessage className={f.error} name="email" component="div" />

                            <div className={f.fieldBlock}>
                                <Field type={'password'} name={'password'} placeholder={'password'} />
                            </div>
                            <ErrorMessage className={f.error} name="password" component="div" />

                            <div className={f.fieldBlockCheckbox}>
                                <Field type={'checkbox'} name={'rememberMe'} />
                                <label htmlFor={'rememberMe'}> remember me </label>
                            </div>
                            <div>
                                <button onClick={formik.handleSubmit} type={'submit'}>Log in</button>
                            </div>
                            <div>
                                <p className={f.error}>{formik.status}</p>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login);