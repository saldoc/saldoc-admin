import { UserTypes } from "./user.types";
import axios from 'axios';

export function getUser(username) {
  return {
    type: UserTypes.GET_USER,
    payload: axios.get(`http://localhost:3004/users?username=${username}`, {})
  }
}

export function resetUser() {
  return {
    type: UserTypes.GET_USER_RESET,
    payload: {}
  }
}