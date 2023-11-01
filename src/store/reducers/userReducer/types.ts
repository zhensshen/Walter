import { type } from "os";

export interface UserState{
    user: any,
    message: null | string,
    loading: boolean,
    error: null | string,
    isAuth: boolean,
    selectedUser: any,
    allUsers: []
}

export enum UserActionTypes {
    START_REQUEST = "START_REQUEST",
    LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS",
    LOGIN_USER_ERROR = "LOGIN_USER_ERROR",
    SERVER_ERROR = "SERVER_ERROR",
    LOGOUT_USER = "LOGOUT_USER",
    GET_ALL_SUCCESS = "GET_ALL_SUCCESS",
    REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS"
}

interface RegisterUserSuccessAction {
    type: UserActionTypes.REGISTER_USER_SUCCESS;
    payload: string;
  }

interface StartRequestAction {
    type: UserActionTypes.START_REQUEST
}

interface GetAllSuccessAction{
    type: UserActionTypes.GET_ALL_SUCCESS,
    payload: any
}

interface LOGOUT_USER {
    type: UserActionTypes.LOGOUT_USER;
  }
  

interface LoginUserSuccessAction{
    type: UserActionTypes.LOGIN_USER_SUCCESS,
    payload: any
}

interface LoginUserErrorAction{
    type: UserActionTypes.LOGIN_USER_ERROR,
    payload: any
}

interface ServerErrorAction{
    type: UserActionTypes.SERVER_ERROR,
    payload: any
}

export type UserActions = | RegisterUserSuccessAction | GetAllSuccessAction  | LOGOUT_USER |  StartRequestAction  | LoginUserSuccessAction | LoginUserErrorAction | ServerErrorAction
