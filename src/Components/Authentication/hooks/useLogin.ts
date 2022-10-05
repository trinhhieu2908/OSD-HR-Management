import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { LoginRequestPayload } from "../../../models/user";
import { setAccessToken } from "../../../Utils/token-config";
import { errorMessage, successMessage } from "../../Commons/Toast/Toast";
import { authenticationApi } from "../api";
import { actions as authActions } from "../redux/slice";

export const useLogin = () => {
    const dispatch = useDispatch();
    return useMutation(
        (user: LoginRequestPayload) => {
            return authenticationApi.login(user);
        },
        {
            onSuccess: (response) => {
                console.log(response);
                setAccessToken(response.data.token);
                dispatch(authActions.setAuthenticated(true));                
                successMessage({ successMessage: "Login successful!" });
            },
            onError: (err: Error) => {
                errorMessage({ errorMessage: "Login Fail" });
            }
        }
    )
}