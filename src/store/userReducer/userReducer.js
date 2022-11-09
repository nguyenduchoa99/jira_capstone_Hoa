import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import Swal from 'sweetalert2'
import { AccessToken, UserLogin } from '../../constants/api'
import userService from '../../services/userService'
const initialState = {
    user: null, isFetchUser: false, errUser: undefined,
    register: null, isFetchRegister: false, errRegister: undefined
}

export const { reducer: userReducer, actions: userActions } = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: (state, action) => {
            state.user = null
            state.register = null
            localStorage.removeItem(UserLogin)
            localStorage.removeItem(AccessToken)
        },
        register: (state, action) => {
            state.errRegister = undefined
        },
        login: (state, action) => {
            state.errUser = undefined
        }
    },
    extraReducers: (builder) => {
        builder
            //Đăng nhập
            .addCase(login.pending, (state, action) => {
                state.isFetchUser = true
            })
            .addCase(login.fulfilled, (state, action) => {
                state.user = action.payload
                state.isFetchUser = false
                state.errUser = undefined
                localStorage.setItem(UserLogin, JSON.stringify(action.payload))
                localStorage.setItem(AccessToken, JSON.stringify(action.payload.accessToken))
            })
            .addCase(login.rejected, (state, action) => {
                state.errUser = action.payload
                state.isFetchUser = false
            })
            //Đăng ký
            .addCase(registerUser.pending, (state, action) => {
                state.isFetchRegister = true
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.register = action.payload
                state.isFetchRegister = false
                state.errRegister = undefined
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.errRegister = action.payload
                state.isFetchRegister = false
            })


    }
})
export const login = createAsyncThunk('Users/signin',
    async (taiKhoan, { rejectWithValue }) => {
        try {
            const results = await userService.login(taiKhoan)
            await Swal.fire({
                icon: 'success',
                title: 'Đăng nhập thành công'
            })
            return results.data.content
        } catch (err) {
            await Swal.fire({
                icon: 'error',
                title: 'Đăng nhập thất bại',
                text: err.response.data.message
            })
            return rejectWithValue(err.response.data.content)
        }
    }
)
export const registerUser = createAsyncThunk('Users/signup',
    async (taiKhoan, { rejectWithValue }) => {
        try {
            const results = await userService.register(taiKhoan)
            await Swal.fire({
                icon: 'success',
                title: 'Đăng ký thành công'
            })
            return results.data.content
        } catch (err) {
            await Swal.fire({
                icon: 'error',
                title: 'Đăng ký thất bại',
                text: err.response.data.message
            })
            return rejectWithValue(err.response.data.content)
        }
    }
)