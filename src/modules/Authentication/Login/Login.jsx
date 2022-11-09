import React from 'react'
import { Form, Input } from 'antd'
import {NavLink, useNavigate } from 'react-router-dom'
import { useForm, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import './login.scss'
import { useEffect } from 'react';
import { login, userActions } from '../../../store/userReducer/userReducer';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user, errUser, register } = useSelector((state) => state.userReducer)
    const { handleSubmit, control } = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
        mode: "onTouched",
    });

    useEffect(() => {
        if (!errUser && user) {
            if (register) {
                navigate('/')
            } else {
                navigate(-1)
            } 
        }
    })
    useEffect(() => {
        dispatch(userActions.login())
    }, []);

    return (
        <div className="login">
            <h1 className="login-title text-[30px] text-center font-bold">Đăng nhập</h1>
            <Form
                onFinish={handleSubmit((values) => dispatch(login(values)))}
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
            >
                <Controller
                    name="email"
                    control={control}
                    rules={{
                        required: {
                            value: true,
                            message: "Vui lòng nhập tài khoản",
                        },
                    }}
                    render={({ field, fieldState: { error } }) => (
                        <Form.Item
                            label="Email"
                            validateStatus={error ? "error" : ""}
                            help={error?.message}
                        >
                            <Input type="text" placeholder='Email' {...field} />
                        </Form.Item>
                    )}
                />

                <Controller
                    name="password"
                    control={control}
                    rules={{
                        required: {
                            value: true,
                            message: "Vui lòng nhập mật khẩu",
                        }
                    }}
                    render={({ field, fieldState: { error } }) => (
                        <Form.Item
                            label="Mật Khẩu"
                            validateStatus={error ? "error" : ""}
                            help={error?.message}
                        >
                            <Input.Password type="password" placeholder='Mật khẩu'{...field} />
                        </Form.Item>
                    )}
                />

                <Form.Item>
                    <button
                        className='log-btn'
                    >
                        Đăng Nhập
                    </button>
                    <div>
                        <p className="text-center">Bạn chưa có tài khoản? <NavLink className='text-title-log' to="/register">Đăng ký ngay!</NavLink></p>
                        <p className="text-center"><NavLink className='text-title-log' to='/'>Back to Home</NavLink></p>
                    </div>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Login