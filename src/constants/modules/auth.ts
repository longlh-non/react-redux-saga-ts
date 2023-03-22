import { createConstants } from "../../utils";

export default createConstants(["LOGIN_REQUEST",
    "LOGIN_FAILED",
    "LOGIN_SUCCESS",
    "LOGOUT_REQUEST",
    "FETCH_PROTECTED_DATA_REQUEST",
    "RECEIVE_PROTECTED_DATA",
    "LOGOUT_FINISHED"])