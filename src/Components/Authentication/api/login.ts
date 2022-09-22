import { LoginRequestPayload } from "../../../models/user";
import axiosConfig from "../../../Utils/axios";

export default function login(data: LoginRequestPayload){
    return axiosConfig.post('Authenticate/login', data);
};