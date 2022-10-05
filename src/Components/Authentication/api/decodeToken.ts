import axiosConfig from "../../../Utils/axios";

export default function decodeToken(token: string) {
    return axiosConfig.get('Authenticate/decode-token', {
        headers: {
            'jwttoken': token
        }
    })
}