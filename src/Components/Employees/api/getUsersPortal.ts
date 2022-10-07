import axiosConfig from "../../../Utils/axios";

export default function getUsersPortal() {
    return axiosConfig.get('Authenticate/users')
}