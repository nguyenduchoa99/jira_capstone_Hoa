import { Form, Input } from 'antd'
import React, { useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { registerUser, userActions } from '../../../store/userReducer/userReducer';
import './register.scss'
const Register = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { errRegister, register } = useSelector((state) => state.userReducer)
    const { handleSubmit, control } = useForm({
        defaultValues: {
            email: "",
            password: "",
            name: "",
            phoneNumber: "",
        },
        mode: "onTouched",
    });
    useEffect(() => {
        if (!errRegister && register) {
            navigate('/login')
        }
    })
    useEffect(() => {
        dispatch(userActions.register())
    })
    return (
        <div className="register">
            <h1 className="register-title text-[30px] text-center font-bold">Đăng Ký</h1>

            <Form
                onFinish={handleSubmit(values => dispatch(registerUser({ ...values })))}
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
            >
                <Controller
                    name="email"
                    control={control}
                    rules={{
                        required: {
                            value: true,
                            message: "Email không được để trống",
                        },
                        pattern: {
                            value:
                                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: "Email không đúng định dạng",
                        },
                    }}
                    render={({ field, fieldState: { error } }) => (
                        <Form.Item
                            label="Email"
                            validateStatus={error ? "error" : ""}
                            help={error?.message}
                        >
                            <Input type="text" {...field} placeholder="Email" />
                        </Form.Item>
                    )}
                />

                <Controller
                    name="password"
                    control={control}
                    rules={{
                        required: {
                            value: true,
                            message: "Mật khẩu không được để trống",
                        },
                        minLength: {
                            value: 6,
                            message: "Mật khẩu phải từ 6 đến 16 ký tự",
                        },
                        maxLength: {
                            value: 16,
                            message: "Mật khẩu phải từ 6 đến 16 ký tự",
                        },
                    }}
                    render={({ field, fieldState: { error } }) => (
                        <Form.Item
                            label="Mật Khẩu"
                            validateStatus={error ? "error" : ""}
                            help={error?.message}
                        >
                            <Input.Password
                                type="password"
                                {...field}
                                placeholder="Mật Khẩu"
                            />
                        </Form.Item>
                    )}
                />



                <Controller
                    name="name"
                    control={control}
                    rules={{
                        required: {
                            value: true,
                            message: "Họ tên không được để trống",
                        },
                    }}
                    render={({ field, fieldState: { error } }) => (
                        <Form.Item
                            label="Họ Tên"
                            validateStatus={error ? "error" : ""}
                            help={error?.message}
                        >
                            <Input type="text" {...field} placeholder="Họ Tên" />
                        </Form.Item>
                    )}
                />

                <Controller
                    name="phoneNumber"
                    control={control}
                    rules={{
                        required: {
                            value: true,
                            message: "Số điện thoại không được để trống",
                        },
                        pattern: {
                            value: /^[0-9]+$/,
                            message: "Số điện thoại không đúng định dạng"
                        }
                    }}
                    render={({ field, fieldState: { error } }) => (
                        <Form.Item
                            label="Số Điện Thoại"
                            validateStatus={error ? "error" : ""}
                            help={error?.message}
                        >
                            <Input type="text" {...field} placeholder="Số Điện Thoại" />
                        </Form.Item>
                    )}
                />
                <Form.Item>
                    <button
                        className='reg-btn'
                    >
                        Đăng Ký
                    </button>
                    <div>
                        <p className="text-center ">Bạn đã có tài khoản? <NavLink className='text-title-reg' to="/login">Đăng nhập ngay!</NavLink> </p>
                        <p className="text-center"><NavLink className='text-title-reg' to='/'>Back to Home</NavLink></p>
                    </div>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Register