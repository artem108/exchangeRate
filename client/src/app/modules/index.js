import { loginUser, getData } from '../api.js'

const LOGIN = 'LOGIN'
const LOGIN_OK = 'LOGIN_OK'
const LOGIN_ERR = 'LOGIN_ERR'
const LOAD_DATA = 'LOAD_DATA'
const LOAD_DATA_OK = 'LOAD_DATA_OK'
const LOAD_DATA_ERR = 'LOAD_DATA_ERR'

const initialState = {
    isLogin: localStorage.getItem('isLogin'),
    data: [],
    user: {},
    load: false,
    err: ''
  }

export const login = (name, email) => {
  localStorage.setItem('isLogin', true);

  return async dispatch => {
    dispatch({ type: LOGIN })
      try {
        const data = await loginUser({  name, email })
          dispatch({
            type: LOGIN_OK,
            payload: data
          })
         } catch (err) {
          dispatch({
            type: LOGIN_ERR,
            payload: err
          })
        }
      }
    }

  export const getCryptoData = () => {
    return async dispatch => {
      dispatch({ type: LOAD_DATA })
      try {
        const data = await getData()
          dispatch({
            type: LOAD_DATA_OK,
            payload: data
          })
         } catch (err) {
          dispatch({
            type: LOAD_DATA_ERR,
            payload: err.massage
          })
        }
      }
    }

export default (state = initialState, action) => {
  switch (action.type) {
  case LOGIN:
    return {
      ...state,
      load: true
    }
  case LOGIN_OK:
    return {
      ...state,
      user: action.payload,
      load: false,
      isLogin: true
    }
  case LOGIN_ERR:
    return {
      ...state,
      load: false,
      isLogin: false,
      err: action.payload
    }
  case LOAD_DATA:
    return {
      ...state,
      load: true
    }
  case LOAD_DATA_OK:
    return {
      ...state,
      data: action.payload,
      load: false
    }
  case LOAD_DATA_ERR:
    return {
      ...state,
      load: false,
      err: action.payload
    }
  default:
    return state
  }
}
